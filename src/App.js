import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductContext from "./context/productContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { productData } from "./productData";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductContext.Provider value={productData}>
            <Home />
          </ProductContext.Provider>
        </Route>
        <Route path="/about_us">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
