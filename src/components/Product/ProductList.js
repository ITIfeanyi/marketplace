import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";

const ProductList = ({ product }) => {
  const { addItem } = useContext(ProductContext);
  return (
    <>
      {
        <div className='productList_container'>
          <div className='productList_subcontainer'>
            <div>
              <img src={product.image} alt={product.title} />
            </div>
            <div>
              <p className='title'>{product.title}</p>
              <p className='discount_price'>
                <sup>NGN</sup>
                {(product.price - product.price / 4).toFixed(2)}
              </p>

              <p className='price'>
                <del>
                  <sup>NGN</sup>
                  {product.price}
                </del>
              </p>
            </div>
          </div>
          <button onClick={() => addItem(product)}>Add to cart</button>
        </div>
      }
    </>
  );
};

export default ProductList;
