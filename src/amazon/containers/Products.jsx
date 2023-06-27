import React from "react";
import FruitsCard from "../components/FruitsCard";

const Products = (props) => {
  let product = props.products.map((product) => {
    return (
      <FruitsCard
        key={product.id}
        id={product.id}
        imgSrc={product.imgSrc}
        name={product.name}
        quotes={product.description}
        price={product.price}
        isAddedToCart={product.isAddedToCart}
        onHandleAddToCart={props.onHandleAddToCart}
      />
    );
  });
  return (
    <div className="container  sm:px-3 m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-10 py-4 my-3">
      {product}
    </div>
  );
};

export default Products;
