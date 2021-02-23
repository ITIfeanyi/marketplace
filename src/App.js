import "./App.css";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import SignIn from "./components/SignInSignUp/SignIn";
import ProductContextProvider from "./components/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <div className='App'>
        <Header />
        <SignIn />
        <Product />
      </div>
    </ProductContextProvider>
  );
}

export default App;
