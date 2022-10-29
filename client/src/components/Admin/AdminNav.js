import React from "react";

import styles from "../../assets/css/admin.module.css";

const AdminNav = () => {
  return (
    <nav>
      <div className={styles.sidebarTop}>
        <span className={styles.shrinkBtn}>
          <i className="bx bx-chevron-left"></i>
        </span>
        <img src="./img/logo.png" className={styles.logo} alt="" />
        <h3 className={styles.hide}>Aqumex</h3>
      </div>

      <div className={styles.search}>
        <i className="bx bx-search"></i>
        <input
          type="text"
          className={styles.hide}
          placeholder="Quick Search ..."
        />
      </div>

      <div className={styles.sidebarLinks}>
        <ul className={styles.mainNavigation}>
          <div className="active-tab"></div>
          <li className="tooltip-element" data-tooltip="0">
            <a href="./index.html" className="active" data-active="0">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
                <i className="bx bxs-tachometer"></i>
              </div>
              <span className="link hide">Dashboard</span>
            </a>
          </li>
          <li className={styles.tooltipElement} data-tooltip="1">
            <a href="#/" data-active="1">
              <div className="icon">
                <i className="bx bx-folder"></i>
                <i className="bx bxs-folder"></i>
              </div>
              <span className="link hide">Projects</span>
            </a>
          </li>

          <li className="tooltip-element" data-tooltip="3">
            <a href="./blogs.html" data-active="3">
              <div className="icon">
                <i className="bx bx-bar-chart-square"></i>
                <i className="bx bxs-bar-chart-square"></i>
              </div>
              <span className="link hide">Blogs</span>
            </a>
          </li>
          <li className="tooltip-element" data-tooltip="4">
            <a href="./forms.html" data-active="4">
              <div className="icon">
                <i className="bx bx-bar-chart-square"></i>
                <i className="bx bxs-bar-chart-square"></i>
              </div>
              <span className="link hide">Forms</span>
            </a>
          </li>
          <div className="tooltip">
            <span className="show">Dashboard</span>
            <span>Projects</span>
            <span>Cards</span>
            <span>Blogs</span>
            <span>Forms</span>
          </div>
        </ul>
      </div>

      <div className="sidebar-footer">
        <a href="#" className="account tooltip-element" data-tooltip="0">
          <i className="bx bx-user"></i>
        </a>
        <div className="admin-user tooltip-element" data-tooltip="0">
          <div className="admin-profile hide">
            <img src="./img/face-1.png" alt="" />
            <div className="admin-info">
              <h3>John Doe</h3>
              <h5>Admin</h5>
            </div>
          </div>
          <a href="./login.html" className="log-out">
            <i className="bx bx-log-out"></i>
          </a>
        </div>
        <div className="tooltip">
          <span className="show">John Doe</span>
          <span>Logout</span>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
