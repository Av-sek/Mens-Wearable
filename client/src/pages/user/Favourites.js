import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const getFavs = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/fav/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setFavourites(data);
    };
    getFavs();
  }, []);

  return (
    <>
      {/* <!-- Breadcrumb Section Begin --> */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shopping Cart</h4>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {favourites.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="col-lg-3 col-md-6 col-sm-6"
                  >
                    <h5>No Products Found</h5>
                  </motion.div>
                ) : (
                  favourites.map((product) => {
                    console.log(product.product_set.id);
                    return (
                      <motion.div
                        layout="true"
                        className="col-lg-3 col-md-6 col-sm-6"
                        key={product.product_set.id}
                      >
                        <ProductItem product={product.product_set} />
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Favourites;
