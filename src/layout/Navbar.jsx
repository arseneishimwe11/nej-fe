import React from "react";
import { Link } from "react-router-dom";
// import { FiShoppingCart } from "react-icons/fi";
          
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Binary Supermarket
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <Link className="btn btn-outline-light" to="/adduser">
          <FiShoppingCart/>
          </Link> */}
          <button
              // disabled={props.productCount <= 0}
              className="text-2xl cart_btn inline-block flex  items-center focus:outline-none focus:shadow-outline p-1 rounded-lg"
              // onClick={props.onHandleCart}
            >
              {/* <FiShoppingCart className="text-blue-700" /> */}
              <span className="text-pink-600 text-xl mt-2 mx-1 font-extrabold inline-block">
                {10}
              </span>
            </button>
        </div>
      </nav>
    </div>
  );
}
