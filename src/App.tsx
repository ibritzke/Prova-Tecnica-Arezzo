import React from "react";

//css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/global.css";

//components
import { Produtos } from "./components/Products/Products";
import { Carrossel } from "./components/Carousel/Carosel";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Carrossel />
      <Produtos />
      <Footer />
    </>
  );
}

export default App;
