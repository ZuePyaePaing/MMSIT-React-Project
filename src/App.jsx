import CategorieBtnGroup from "./components/CategorieBtnGroup";
import CategorieSection from "./components/CategorieSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RatingStar from "./components/RatingStar";

export default function App() {
  return (
    <>
      <Header />
      <section className="p-5 font-popin">
        <p className=" font-bold mb-4">Product Categories</p>
        <CategorieBtnGroup />
        <CategorieSection />
      </section>
      <Footer />
    </>
  );
}
