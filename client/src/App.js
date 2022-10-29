import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/elegant-icons.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/js/main.js";
import "./assets/css/adminpanel.css";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import AdminNav from "./components/Admin/AdminNav";
import ShopDetails from "./pages/ShopDetails";
import ShoppingCart from "./pages/ShoppingCart";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Checkout from "./pages/Checkout";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogAdmin from "./pages/BlogAdmin";
import BlogUpload from "./pages/BlogUpload";

function App() {
  const { role } = useSelector((state) => state.user.userInfo);

  console.log(role);

  return (
    <Router>
      <AdminNav />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/blog-admin" element={<BlogAdmin />} />
        <Route path="/blog-upload" element={<BlogUpload />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<ShopDetails />}>
          <Route path=":id" element={<ShopDetails />} />
        </Route>
        <Route path="/shop-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-details" element={<BlogDetails />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
