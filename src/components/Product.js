import React from "react";
import { Link } from "react-router-dom";
import Rating from 'react-rating';

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2">
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} alt="" className="img-fluid" />
          <h1>{product.name}</h1>
          <Rating
  initialRating={product.rating}
  readonly
/>
          <h1>Price:{product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
