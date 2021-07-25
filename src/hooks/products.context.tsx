import React, { createContext, useState } from "react";
import { useCallback } from "react";
import axios from "axios";

import {
  IProductContextData,
  IProduct,
  IResponseProduct,
} from "../types/product";
import { setLocalstorage, getLocalstorage } from "../utils/localstorage";
import { useEffect } from "react";
import { LocalStorageTypes } from "../types/localstorage";

export const ProductContext = createContext<IProductContextData>(
  {} as IProductContextData
);

const returnFavoritesFromStorage = () => {
  const favorites = getLocalstorage(LocalStorageTypes.FAVORITES);

  if (!!favorites) {
    return favorites as IProduct[];
  }

  return [];
};

export const ProductProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(2000);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const [favorites, setFavorites] = useState<IProduct[]>(
    returnFavoritesFromStorage
  );

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data: response } = await axios.get<IResponseProduct>(
        `https://api.mercadolibre.com/sites/MLB/search?category=MLB1648&limit=${pageSize}&offset=${
          pageSize * (page - 1)
        }`
      );
      setProducts(response.results);
      setTotal(response.paging.total);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [page, pageSize]);

  const toogleFavoriteItem = useCallback(
    (item: IProduct) => {
      !!favorites.find((x) => x.id === item.id)
        ? setFavorites(favorites.filter((x) => x.id !== item.id))
        : setFavorites([...favorites, item]);
    },
    [favorites]
  );

  useEffect(() => {
    setLocalstorage(LocalStorageTypes.FAVORITES, favorites);
  }, [favorites]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <ProductContext.Provider
      value={{
        products,
        favorites,
        isLoading,
        page,
        pageSize,
        total,
        setPage,
        setPageSize,
        getProducts,
        toogleFavoriteItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
