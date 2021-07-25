import React, { useContext } from "react";
import { Layout } from "../../shared/Layout";
import { Products } from "../../components/Product";
import { ProductContext } from "../../hooks/products.context";

const Home: React.FC = () => {
  const { products } = useContext(ProductContext);

  return (
    <Layout>
      <Products list={products} />
    </Layout>
  );
};

export default Home;
