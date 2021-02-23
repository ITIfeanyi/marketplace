import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import Cart from "../Cart";

const Header = () => {
  const { cartItems } = useContext(ProductContext);
  const handleNav = () => {
    const navopen = document.querySelector(".menu_container");
    navopen.classList.toggle("is-open");
  };

  const handleCart = () => {
    const cartOpen = document.querySelector(".cart_container");
    cartOpen.classList.toggle("cart-open");
  };
  return (
    <div className='header__nav'>
      <div className='header_container'>
        <div className='nav_container'>
          <div className='nav_icon' onClick={handleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='header_logo'>Market Place</div>
        </div>

        <div className='cart__signin'>
          <div>Sign In</div>
          <div className='cart' onClick={handleCart}>
            Cart {cartItems.length}
          </div>
        </div>
      </div>
      <div className='search__logo'>
        <input
          className='search_input'
          type='search'
          placeholder='Search Market Place'
        />
      </div>
      <div className='cart_container'>
        <div className='header_logo'>Market Place</div>
        <button onClick={handleCart} className='cart__close'>
          X
        </button>
        <Cart />
      </div>

      <nav className='menu_container large'>
        <ul className='menu'>
          <li>
            <a href='/#'>Home</a>{" "}
          </li>
          <li>
            <a href='/#'>Products</a>{" "}
          </li>
          <li>
            <a href='/#'>Collections</a>{" "}
          </li>
          <li>
            <a href='/#'>Contact</a>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
