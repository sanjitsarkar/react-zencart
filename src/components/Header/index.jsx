import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishListContext";
import "./Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, isLoggedIn, signUp, logIn, logOut } = useAuth();
  const { cart } = useCart();
  const { wishList } = useWishList();
  return (
    <header className=" bg-dark-2 l-2 r-2 t-2 p-2 pl-3 pr-3 h-auto fixed flex items-center z-50 br-lg b-solid b-1 h-min br-primary back-blur-5 bx-sh-primary-3">
      <nav className="flex items-center justify-between w-full ">
        <ul className="left row items-center gap-2 justify-between">
          <button
            className="menu btn-round-md bg-primary ml-0"
            onClick={() => setNavbar(!navbar)}
          >
            <i className="fa fa-bars"></i>
          </button>
          <Link to="/" className="text-xl text-light">
            ZenCart
          </Link>
          <i className="search-icon fa fa-search btn btn-round-md btn-secondary"></i>
          <div className="input-box input input-dark">
            <i className="fa fa-search"></i>
            <input
              type="search"
              placeholder="Search products..."
              className="input"
            />
          </div>
        </ul>
         {" "}
        <ul
          className={`right row items-center gap-1 text-light ${
            navbar ? "show" : ""
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="btn btn-secondary">
                  Signup
                </Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/cart">
                  <div className="badge-holder">
                    <i className="fa fa-shopping-cart grid place-content-center w-12 h-12 bg-light p-2 br-full text-dark"></i>
                    <span className="badge badge-dark">{cart.length}</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/wishlist">
                  <div className="badge-holder">
                    <i className="fa fa-heart grid place-content-center w-12 h-12 bg-pink text-light p-2 br-full text-light"></i>
                    <span className="badge badge-dark">{wishList.length}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
                    alt="user"
                    className="avatar avatar-xsm "
                  />
                </Link>
              </li>
              <li>
                <button className="btn btn-primary" onClick={logOut}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
