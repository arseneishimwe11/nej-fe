import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CartProduct = (props) => {
  const { id, imgSrc, name, quotes, price, onRemove,count } = props;
  return (
    <div className="flex flex-col justify-center items-center mb-1 p-1 text-center border-b">
      <img className="w-40 h-40 rounded-full mb-2" src={imgSrc} alt={name} />
      <span className="text-pink-700  rounded text-xl">${price}</span>
      <h3 className="text-2xl uppercase text-indigo-700 my-2">{name}</h3>
      <button onClick={() => {count + 1}} className="text-2xl uppercase text-indigo-700 my-2">count {count}</button>
      <p className="capitalize mb-3">{quotes}</p>
      <button
        onClick={() => onRemove(id)}
        className="flex justify-center items-center bg-red-600 p-2 text-center text-red-100 my-2 rounded font-bold focus:outline-none focus:shadow-outline hover:bg-red-500 hover:bg-red-200 transition ease-out duration-500"
      >
        <span className="text-xl mr-1">
          <AiOutlineDelete />
           </span>
        <span className="tracking-wider">Remove</span>
      </button>
    </div>
  );
};

export default CartProduct;
