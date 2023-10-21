/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  const { name, brand, type, price, ratting, descriptions, image, _id } =
    product;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl lg:h-[550px]">
        <figure>
          <img className=" " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <h2 className=" text-xl font-bold">{brand}</h2>
          <p>{type}</p>
          <p className=" font-bold">
            Price: <span className=" text-red-700">{price}</span> $
          </p>
          <p>Details: {descriptions}</p>
          <p>Users Ratting: {ratting}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${_id}`}>
              <button className="btn btn-success">Details</button>
            </Link>
            <Link to={"/addProducts"}>
              <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
