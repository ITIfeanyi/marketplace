import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItem = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  };
  const removeItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    setIsloading(true);
    setIsError("");
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.ok !== true && res.status !== 200) {
          return new Error("An error occurred");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setIsloading(false);
          setIsError("");
          setProducts(data);
        }
      })
      .catch((error) => {
        setIsloading(true);

        setProducts([]);
        setIsError(error);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        isError,
        isLoading,
        isLogin,
        setIsLogin,
        addItem,
        cartItems,
        removeItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
