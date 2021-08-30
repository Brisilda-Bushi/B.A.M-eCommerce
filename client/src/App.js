import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// 1st party component
import NavbarFunc from "./features/Components/Navbar";
import Footer from "./features/Components/Footer";

// pages
import HomePage from "./features/Pages/HomePage";
import About from "./features/Pages/About";
import Shop from "./features/Pages/Shop";
import Contact from "./features/Pages/Contact";
import Cart from "./features/Pages/Cart";
import PageNotFound from "./features/Pages/PageNotFound";
import RegistrationPage from "./features/Pages/RegistrationPage";

function App() {
  return (
    <div className="App">
      <Router basename="/B.A.M-eCommerce">
        <NavbarFunc />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={RegistrationPage} />
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
