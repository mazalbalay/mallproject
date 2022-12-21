import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <aside id="offcanvas_aside">
        <div>
          <Link to="/">LOGO</Link>
          <div>
            <button>
              <i className="fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact={true}>
                        <i className="icon fas fa-home"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/products">
                        <i className="icon fas fa-shopping-bag"></i>
                        <span>Products</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/addProduct">
                        <i className="icon fas fa-cart-plus"></i>
                        <span>Add product</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink tp="/category">
                        <i className="icon fas fa-list"></i>
                        <span>Categories</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders">
                        <i className="icon fas fa-bags-shopping"></i>
                        <span>Orders</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/users">
                        <i className="icon fas fa-user"></i>
                        <span>Users</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/sellers">
                        <i className="icon fas fa-store-alt"></i>
                        <span>Sellers</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/transaction">
                        <i className="icon fas fa-usd-circle"></i>
                        <span>Transactions</span>
                    </NavLink>
                </li>
            </ul>

            <br/>
            <br/>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
