import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import ErroPage from "./Pages/ErroPage/ErroPage";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErroPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
