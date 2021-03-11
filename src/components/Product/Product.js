import React, { useContext, useEffect } from "react";
import ProductList from "./ProductList";
import CssLoader from "../CssLoader/CssLoader";
import { ProductContext } from "../ProductContext";
import styles from "./Product.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Product = () => {
  const { isLoading, products } = useContext(ProductContext);
  useEffect(() => {
    document.title = "Product | MarketPlace";
  });
  return (
    <>
      <div className={styles.product_container}>
        <Header />

        {isLoading ? (
          <CssLoader />
        ) : (
          products.map((product) => (
            <ProductList key={product.id} product={product} />
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
