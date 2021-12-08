import React from "react";
import { useParams,match } from "react-router";
import products from "../products";

const Productescreen = ({product}) => {
  const { id } = useParams();
   console.log("Product:",products.id)
  return (
    <div>
      <h1>Product Description Page</h1>
      <h1>The Product Id is{id}  </h1>
     
    </div>
  );
};

export default Productescreen;





  