import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

const Cart = () => {
  const { cartItems, addItem, removeItem } = useContext(ProductContext);

  const total = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.qty, 0)
    .toFixed(2);
  return (
    <>
      <div className='cart_subcontainer'>
        <div className='cart_empty'>
          {cartItems.length < 1 && (
            <div>
              {" "}
              Cart is empty{" "}
              <p>Please add products by clicking add to cart at the homepage</p>
            </div>
          )}
        </div>
        <div className='cart'>
          {cartItems.map((item) => (
            <div key={item.id} className='sub_cart'>
              <div className='cart_title'> {item.title} </div>
              <div className='cart_btn_container'>
                <button className='cart_btn' onClick={() => removeItem(item)}>
                  -
                </button>
                <button className='cart_qty'> {item.qty} </button>
                <button className='cart_btn' onClick={() => addItem(item)}>
                  +
                </button>
              </div>

              <div className='sub_total'>
                {(item.qty * item.price.toFixed()).toLocaleString()}{" "}
              </div>
            </div>
          ))}
          {cartItems.length > 0 && (
            <div className='cart_total'>
              <div>Total</div>
              <div> {total}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
