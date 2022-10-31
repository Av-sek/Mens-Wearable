import { Routes, Route, Outlet } from "react-router-dom";
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

// User routes
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
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

// Admin Routes
import AdminNav from "./components/Admin/AdminNav";
import BlogAdmin from "./pages/BlogAdmin";
import BlogUpload from "./pages/BlogUpload";
import ProductUpload from "./pages/ProductUpload";
import ProductAdmin from "./pages/ProductAdmin";

function App() {
  const { role } = useSelector((state) => state.user.userInfo);

  console.log(role);

  const AdminOutlet = () => {
    return (
      <>
        <AdminNav />
        <Outlet />
      </>
    );
  };

  const UserOutlet = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* Admin Routes */}

        <Route path="admin" element={<AdminOutlet />}>
          <Route index element={<BlogAdmin />} />
          <Route path="blog" element={<BlogAdmin />} />
          <Route path="blog/upload" element={<BlogUpload />} />
          <Route path="product" element={<ProductAdmin />} />
          <Route path="product/upload" element={<ProductUpload />} />
        </Route>

        {/* User Routes */}

        <Route path="/" element={<UserOutlet />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="shop-details" element={<ShopDetails />}>
            <Route path=":id" element={<ShopDetails />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
