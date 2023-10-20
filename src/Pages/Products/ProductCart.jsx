import React from "react";

const ProductCart = ({product}) => {
    const {name, brand, type, price, ratting, descriptions, image} = product;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2>{brand}</h2>
        <p>{type}</p>
        <p>{price} $</p>
        <p>{descriptions}</p>
        <p>{ratting}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
