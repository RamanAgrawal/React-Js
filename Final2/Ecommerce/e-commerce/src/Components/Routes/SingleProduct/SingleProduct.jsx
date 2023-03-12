import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const SingleProduct = (props) => {
  const array = props.productsArr;
  const { id } = useParams();
  const product = array.find((p) => p.id === parseInt(id));
  console.log(product);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={product.imageUrl} alt="image" />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>Price : {product.price}</p>
          <p>{product.description}</p>
          <Button variant="primary">ADD TO CART</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
