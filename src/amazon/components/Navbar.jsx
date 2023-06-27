import React from "react";

import { FiShoppingCart } from "react-icons/fi";

const Navbar = (props) => {
  console.log(props);
  return (
    <nav className="bg-white border-b p-3">
      <div className="container flex justify-between items-center m-auto">
        <a
          href="/shopping_cart"
          rel="noopener noreferrer"
          className="text-xl uppercase tracking-widest shadow-outline p-1 rounded-lg"
        >
          <span className="bg-pink-600 text-pink-100 px-2  rounded mr-1">
            Binary
          </span>
          👉
          <span className=" text-purple-900 p-1 rounded">Supermarket</span>
        </a>
        <ul>
          <li>
            <button
              disabled={props.productCount <= 0}
              className="text-2xl cart_btn inline-block flex  items-center focus:outline-none focus:shadow-outline p-1 rounded-lg"
              onClick={props.onHandleCart}
            >
              <FiShoppingCart className="text-blue-700" />
              <span className="text-pink-600 text-xl mt-2 mx-1 font-extrabold inline-block">
                {props.productCount}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
