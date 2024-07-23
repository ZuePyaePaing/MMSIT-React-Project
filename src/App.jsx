import CategorieBtnGroup from "./components/CategorieBtnGroup";
import CategorieSection from "./components/CategorieSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <section className="p-5 font-popin">
        <h2 className=" font-bold mb-4 text-md">Product Categories</h2>
        <CategorieBtnGroup />
        <CategorieSection />
      </section>
      <Footer />
    </>
  );
}
