import React from "react";
import { FiShoppingCart } from "react-icons/fi";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoIosPricetag } from "react-icons/io";

const FruitsCard = (props) => {
  const { id, imgSrc, name, quotes, price, isAddedToCart, onHandleAddToCart } =
    props;

  return (
    <div className="w-full h-400 flex justify-center items-center">
      <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
        <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div className="prod-title">
            <p className="text-2xl uppercase text-gray-900 font-bold">
              Puma Shoes
            </p>
            <p className="uppercase text-sm text-gray-400">
              The best shoes in the marketplace
            </p>
          </div>
          <div className="prod-img">
            <img
              src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="prod-info grid gap-10">
            <div>
              <ul className="flex flex-row justify-center items-center">
                <li className="mr-4 last:mr-0">
                  <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                    <a
                      href="#blue"
                      className="block w-6 h-6 bg-blue-900 rounded-full"
                    ></a>
                  </span>
                </li>
                <li className="mr-4 last:mr-0">
                  <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                    <a
                      href="#yellow"
                      className="block w-6 h-6 bg-yellow-500 rounded-full"
                    ></a>
                  </span>
                </li>
                <li className="mr-4 last:mr-0">
                  <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                    <a
                      href="#red"
                      className="block w-6 h-6 bg-red-500 rounded-full"
                    ></a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p className="font-bold text-xl">65 $</p>
              <button
                disabled={isAddedToCart}
                // className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800
                //  hover:text-white border-2 border-gray-900 focus:outline-none"
                className={`px-6 py-2 transition ease-in duration-200 uppercase rounded-full focus:outline-none focus:shadow-outline ${
                  isAddedToCart
                    ? "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition ease-out duration-150"
                    : "text-pink-200 bg-pink-600 hover:bg-pink-300 hover:text-pink-700 transition ease-out duration-500"
                }`}
                onClick={() => onHandleAddToCart(id)}
              >
                <span className="inline-block mr-2  text-xl">
                  <FiShoppingCart />                  
                </span>
                <span className="inline-block">
                  {isAddedToCart ? "Added to cart " : "Add to cart "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitsCard;
