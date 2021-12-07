import React from "react";
import { useParams } from "react-router";

import products from "../products";

const Productescreen = (product) => {
  const { id } = useParams();
  //const products = product.find((product) => product.id === id);
  return (
    <div>
      <h1>Product Description Page</h1>
      <h1>The Product Id is{id} </h1>
      <h1>{product.name}</h1>
    </div>
  );
};

export default Productescreen;
