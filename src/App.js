import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero/>
      <Products heading="Choose you Pizza" data={productData}/>
    </Router>
  );
}

export default App;
