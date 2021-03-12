import "./App.css";
import { Switch, Route } from "react-router-dom";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import ProductContextProvider from "./components/ProductContext";
import SignUp from "./components/SignInSignUp/SignUp";
import SignIn from "./components/SignInSignUp/SignIn";
import Contact from "./components/ContactPage/Contact";
import UserContextProvider from "./components/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <ProductContextProvider>
          <div className='App'></div>

          <Switch>
            <Route exact path='/'>
              <Product />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/sign-up'>
              <SignUp />
            </Route>
            <Route path='/sign-in'>
              <SignIn />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </ProductContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
