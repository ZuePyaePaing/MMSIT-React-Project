import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <Container>
      <Link to={"/"} className="p-2">
        Home
      </Link>
      /
      <Link to={"/"} className="text-gray-500 p-2">
        My Cart
      </Link>
      <CartSection />
    </Container>
  );
};

export default MyCart;
