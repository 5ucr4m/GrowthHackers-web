import React from "react";
import { Row } from "antd";
import { Product } from ".";
import { Pagination } from ".";
import { IProduct } from "../../types/product";

interface IProps {
  list: IProduct[];
  pagination?: boolean;
}

export const Products: React.FC<IProps> = ({ list, pagination = true }) => {
  return (
    <div>
      Listagem de produtos
      <Row gutter={[20, 5]}>
        {list.map((product) => (
          <Product item={product} key={product.id} />
        ))}
      </Row>
      {pagination && <Pagination />}
    </div>
  );
};
