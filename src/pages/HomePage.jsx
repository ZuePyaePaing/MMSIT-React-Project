import React from "react";
import CategorieBtnGroup from "../components/CategorieBtnGroup";
import CategorieSection from "../components/CategorieSection";
import Container from "../components/Container";
const HomePage = () => {
  return (
    <Container className='bg-red'>
      <h2 className=" font-bold mb-4 text-md">Product Categories</h2>
      <CategorieBtnGroup />
      <CategorieSection />
    </Container>
  );
};

export default HomePage;
