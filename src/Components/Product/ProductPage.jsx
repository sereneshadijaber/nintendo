import React from "react";
import Product from "./Product";
import ReadMore from "./ReadMore";
import ESRBMoreDetails from "./ESRBMoreDetails";
import TableDetails from "./TableDetails";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  return (
    <div>
      <Product></Product>
      <ReadMore></ReadMore>
      <ESRBMoreDetails></ESRBMoreDetails>
      <TableDetails></TableDetails>
      <ProductCard></ProductCard>


    </div>
  );
};
export default ProductPage;
