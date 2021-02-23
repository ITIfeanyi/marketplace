import React, { useContext } from "react";
import ProductList from "./ProductList";
import CssLoader from "../CssLoader/CssLoader";
import { ProductContext } from "../ProductContext";
const Product = () => {
  const { isLoading, products } = useContext(ProductContext);

  return (
    <div className='product_container'>
      {isLoading ? (
        <CssLoader />
      ) : (
        products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Product;
