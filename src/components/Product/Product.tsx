import React, { useContext, useMemo } from "react";
import { Row } from "antd";
import { IProduct } from "../../types/product";
import { formCurrency } from "../../utils/currency";
import { ProductContext } from "../../hooks/products.context";

import FavoriteIcon from "./FavoriteIcon";
import { Card, Col, Image, Title, Price } from "./styles";

interface IProps {
  item: IProduct;
}

export const Product: React.FC<IProps> = ({ item }) => {
  const { thumbnail, price, title, id } = item;
  const { favorites, toogleFavoriteItem } = useContext(ProductContext);

  const isFavorite = useMemo(() => {
    return !!favorites.find((x) => x.id === id);
  }, [favorites, id]);

  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card>
        <Image src={thumbnail} alt="imagem do produto" />
        <Title>{title}</Title>
        <Row justify="space-between">
          <Price>{formCurrency.format(price)}</Price>
          <FavoriteIcon
            isFavorite={isFavorite}
            toogleFavorite={() => toogleFavoriteItem(item)}
          />
        </Row>
      </Card>
    </Col>
  );
};
