import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { CartContext } from "../../Store/CartContext";
import Footer from "../../Footer/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = (props) => {
  const value = useContext(CartContext);
  const Useremail = localStorage.getItem("email");
  const ChangesEMail = Useremail.replace("@", "").replace(".", "");
  const crudId = "5de3de5b8b5e4824bda9454d7fcc1104";
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
      await axios.post(
        `https://e-commerce-1-55a40-default-rtdb.firebaseio.com/cart/${ChangesEMail}.json`,
        details
      );

      toast.success("ADDED TO CART", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
      <ToastContainer />
    </>
  );
};

export default SingleProduct;
