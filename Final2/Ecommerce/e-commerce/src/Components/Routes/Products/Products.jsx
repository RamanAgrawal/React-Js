import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../Store/CartContext";
import "./Product.css";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  const value = useContext(CartContext);
  console.log(value);
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
        {productsArr.map((el) => {
          return (
            <div key={el.title}>
              <img src={el.imageUrl} alt="image" />
              <h4>{el.title}</h4>
              <p>Price : {el.price}</p>
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
