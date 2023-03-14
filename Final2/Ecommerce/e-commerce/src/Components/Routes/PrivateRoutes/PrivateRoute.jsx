import { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const ctx = useContext(CartContext);
  const isLoggesIn = ctx.token;
  if (!isLoggesIn) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
