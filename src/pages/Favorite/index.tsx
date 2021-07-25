import React, { useContext } from "react";
import { Layout } from "../../shared/Layout";
import { Products } from "../../components/Product";
import { ProductContext } from "../../hooks/products.context";

const Favorite: React.FC = () => {
  const { favorites } = useContext(ProductContext);

  return (
    <Layout>
      <Products list={favorites} pagination={false} />
    </Layout>
  );
};

export default Favorite;
