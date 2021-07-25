export interface IProduct {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
}

export interface IResponseProduct {
  paging: {
    total: number;
  };
  results: IProduct[];
}

export interface IProductContextData {
  products: IProduct[];
  favorites: IProduct[];
  isLoading: boolean;
  page: number;
  pageSize: number;
  total: number;
  setPage: (value: number) => void;
  setPageSize: (value: number) => void;
  getProducts: () => void;
  toogleFavoriteItem: (item: IProduct) => void;
}
