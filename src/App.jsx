import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
      <Footer />
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 1000,

          // Default options for specific types
        }}
      />
    </>
  );
}
