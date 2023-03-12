import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../Store/CartContext";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = (props) => {
  const value = useContext(CartContext);
  const handleClick = (title, price, image) => {
    value.addItems({
      title,
      price,
      image,
    });
  };
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {props.productsArr.map((el) => {
          return (
            <div key={el.title}>
              <img src={el.imageUrl} alt="image" />
              <h4>{el.title}</h4>
              <p>Price : {el.price}</p>
              <Link to={`/products/${el.id}`}>More Details</Link>
              <Button
                onClick={() => handleClick(el.imageUrl, el.price, el.title)}
                variant="primary"
              >
                ADD TO CART
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
