import React from "react";
import Navbar from "../Navbar/Navbar";
import ProductPage from "../Product/ProductPage";

import FooterPage from "../Footer/FooterPage";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProductPage></ProductPage>
      <FooterPage></FooterPage>
    </div>
  );
};
export default Main;
