import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const [position, setPosition] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const activeTab = useRef(null);
  const sidebarRef = useRef(null);

  const activeTabHandler = (e) => {
    const clickPosition = e.clientY - sidebarRef.current.offsetTop;
    const index = Math.floor(clickPosition / 58);
    activeTab.current.style.top = `${index * 58 + 2.5}px`;
  };

  const toggleShrink = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`admin-nav ${isExpanded ? " " : "shrink"}`}>
      <div className="sidebar-top">
        <span className="shrink-btn" onClick={toggleShrink}>
          <i className="bx bx-chevron-left"></i>
        </span>
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/404/09ecc066614097.Y3JvcCwxNDAzLDEwOTgsMCwxNTI.png"
          className="logo"
          alt=""
        />
        <h3 className="hide">Aqumex</h3>
      </div>

      <div className="search">
        <i className="bx bx-search"></i>
        <input type="text" className="hide" placeholder="Quick Search ..." />
      </div>

      <div className="sidebar-links" ref={sidebarRef}>
        <ul className="main-navigation">
          <div className="active-tab" ref={activeTab}></div>
          <li className="tooltip-element">
            <Link
              to="/admin/blog"
              className="active"
              onClick={activeTabHandler}
            >
              <div className="icon">
                <i className="bx bx-tachometer"></i>
                <i className="bx bxs-tachometer"></i>
              </div>
              <span className="link hide">Blogs</span>
            </Link>
          </li>
          <li className="tooltip-element">
            <Link
              to="/admin/blog/upload"
              className="active"
              onClick={activeTabHandler}
            >
              <div className="icon">
                <i className="bx bx-tachometer"></i>
                <i className="bx bxs-tachometer"></i>
              </div>
              <span className="link hide">Add Blogs</span>
            </Link>
          </li>
          <li className="tooltip-element">
            <Link
              to="/admin/product"
              className="active"
              onClick={activeTabHandler}
            >
              <div className="icon">
                <i className="bx bx-tachometer"></i>
                <i className="bx bxs-tachometer"></i>
              </div>
              <span className="link hide">Products</span>
            </Link>
          </li>
          <li className="tooltip-element">
            <Link
              to="/admin/product/upload"
              className="active"
              onClick={activeTabHandler}
            >
              <div className="icon">
                <i className="bx bx-tachometer"></i>
                <i className="bx bxs-tachometer"></i>
              </div>
              <span className="link hide">Add Products</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <a href="#" className="account tooltip-element">
          <i className="bx bx-user"></i>
        </a>
        <div className="admin-user tooltip-element">
          <div className="admin-profile hide">
            <img
              src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
              alt=""
            />
            <div className="admin-info">
              <h3>John Doe</h3>
              <h5>Admin</h5>
            </div>
          </div>
          <a href="./login.html" className="log-out">
            <i className="bx bx-log-out"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
