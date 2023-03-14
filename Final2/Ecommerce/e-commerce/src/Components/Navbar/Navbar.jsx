import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Store/CartContext";
import "./Navbar.css";

function CollapsibleExample() {
  const value = useContext(CartContext);
  // const length = value.items.length;
  const navigate = useNavigate();
  const isLoggesIn = value.token;
  const handleLogout = () => {
    value.logout();
    value.items.length = 0;
    navigate("/");
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="container">
        <Navbar.Brand>
          <h3 style={{ color: "beige", fontFamily: "cursive" }}>E-Commerce</h3>
        </Navbar.Brand>
        <Nav className="me-auto-2">
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/about"}>About</Link>
          {isLoggesIn ? (
            <button
              style={{
                border: "none",
                background: "transparent",
                color: "white",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
          <Link to={"/cart"}>Cart</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
