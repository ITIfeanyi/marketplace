import React, { useContext, useEffect } from "react";
import styles from "./Cart.module.css";
import { ProductContext } from "../ProductContext";
import EmptyFooter from "../Footer/EmptyFooter";
import EmptyHeader from "../Header/EmptyHeader";

import SignInSignUp from "../SignInSignUp/SignInSignUp";
import { UserContext } from "../UserContext";

const Cart = () => {
  const { hasAccount } = useContext(UserContext);
  const { cartItems, addItem, removeItem } = useContext(ProductContext);
  useEffect(() => {
    document.title = "Cart | MarketPlace";
  });
  const total = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.qty, 0)
    .toFixed(2);
  return (
    <>
      <EmptyHeader />
      {hasAccount ? "" : <SignInSignUp />}
      <div className={styles.cart_container}>
        <div className={styles.cart_subcontainer}>
          <div className={styles.cart_empty}>
            {cartItems.length < 1 && (
              <div>
                {" "}
                Cart is empty{" "}
                <p>
                  Please add products by clicking add to cart at the homepage
                </p>
              </div>
            )}
          </div>
          <div className={styles.cart}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.sub_cart}>
                <div className={styles.cart_title}> {item.title} </div>
                <div className={styles.cart_btn_container}>
                  <button
                    className={styles.cart_btn}
                    onClick={() => removeItem(item)}
                  >
                    -
                  </button>
                  <button className={styles.cart_qty}> {item.qty} </button>
                  <button
                    className={styles.cart_btn}
                    onClick={() => addItem(item)}
                  >
                    +
                  </button>
                </div>

                <div className={styles.sub_total}>
                  {(item.qty * item.price.toFixed()).toLocaleString()}{" "}
                </div>
              </div>
            ))}
            {cartItems.length > 0 && (
              <>
                <div className={styles.cart_total}>
                  <div>Total</div>
                  <div> {total}</div>
                </div>
                <div className={styles.checkout_box}>
                  <button>Checkout</button>
                  {hasAccount ? "" : <p>Please login to checkout</p>}{" "}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
