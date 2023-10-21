/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useLoaderData();
  const product = products.find((product) => product._id == id);
  const { name, image, price, descriptions, ratting } = product;

  return (
    <div>
      <div className="hero lg:h-[700px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className=" w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
              {descriptions}
            </p>
            <p >
             Price: <span className=" text-red-700 font-bold">{price}</span> $
            </p>
            <p className="py-2">
             User Ratting: {ratting}
            </p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
