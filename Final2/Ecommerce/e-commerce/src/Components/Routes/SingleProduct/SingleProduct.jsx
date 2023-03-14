import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { CartContext } from "../../Store/CartContext";
import Footer from "../../Footer/Footer";
import axios from "axios";
const SingleProduct = (props) => {
  const value = useContext(CartContext);
  const Useremail = localStorage.getItem("email");
  const ChangesEMail = Useremail.replace("@", "").replace(".", "");
  const crudId = "961178f64a1f41c9b001935e70605175";
  const handleClick = async (title, price, image) => {
    value.addItems({
      title,
      price,
      image,
    });
    const details = {
      title,
      price,
      image,
      quantity: 1,
    };
    try {
      let res = await axios.post(
        `https://crudcrud.com/api/${crudId}/${ChangesEMail}`,
        details
      );
      console.log(res);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const array = props.productsArr;
  const { id } = useParams();
  const product = array.find((p) => p.id === parseInt(id));

  return (
    <>
      <Container style={{ height: "540px" }}>
        <Row>
          <Col md={6}>
            <img src={product.imageUrl} alt="image" />
          </Col>
          <Col md={6}>
            <h2>{product.title}</h2>
            <p>Price : {product.price}</p>
            <p>{product.description}</p>
            <Button
              onClick={() =>
                handleClick(product.imageUrl, product.price, product.title)
              }
              variant="primary"
            >
              ADD TO CART
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SingleProduct;
