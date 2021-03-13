import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import styles from "./Product.module.css";

const ProductList = ({ product }) => {
  const { addItem } = useContext(ProductContext);
  return (
    <>
      {
        <div className={styles.productList_container} >
          <div className={styles.productList_subcontainer}>
            <div> 
              <img src={product.image} alt={product.title} />
            </div>
            <div>
              <p className={styles.title}>{product.title}</p>
              <p className={styles.category}>Category - {product.category} </p>
              <p className={styles.discount_price}>
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
          <div className={styles.btn_container}>
            <button onClick={() => addItem(product)}>Add to cart</button>
          </div>
        </div>
      }
    </>
  );
};

export default ProductList;
