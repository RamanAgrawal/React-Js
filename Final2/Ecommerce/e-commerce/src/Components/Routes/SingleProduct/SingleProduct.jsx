import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { parsePath, useParams } from "react-router";

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
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
