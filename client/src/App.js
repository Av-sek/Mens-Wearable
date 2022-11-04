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
import ShopDetails from "./pages/user/ShopDetails";
import ShoppingCart from "./pages/user/ShoppingCart";
import Home from "./pages/user/Home.js";
import Shop from "./pages/user/Shop.js";
import Checkout from "./pages/user/Checkout";
import Blogs from "./pages/user/Blogs";
import BlogDetails from "./pages/user/BlogDetails";
import Contact from "./pages/user/Contact";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";

// Admin Routes
import AdminNav from "./components/Admin/AdminNav";
import BlogAdmin from "./pages/admin/BlogAdmin";
import BlogUpload from "./pages/admin/BlogUpload";
import ProductUpload from "./pages/admin/ProductUpload";
import ProductAdmin from "./pages/admin/ProductAdmin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const user = useSelector((state) => state.user);

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

        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!!user && user.role === "admin"}
            />
          }
        >
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
          <Route path="shop-cart" element={<ShoppingCart />} />
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
