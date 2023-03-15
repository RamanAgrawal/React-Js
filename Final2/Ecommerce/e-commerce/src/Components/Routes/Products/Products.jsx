import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = (props) => {
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {props.productsArr.map((el) => {
          return (
            <div key={el.title}>
              <img src={el.imageUrl} alt="image" />
              <h4>{el.title}</h4>
              <p>Price : {el.price} Rs</p>
              <Link to={`/products/${el.id}`}>More Details</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
