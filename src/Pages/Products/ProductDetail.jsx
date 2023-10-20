import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useLoaderData();
  const product = products.find((product) => product._id == id);
  const { name, image, price, descriptions, ratting } = product;

  return (
    <div>
      <div className="card md:grid md:grid-cols-2 gap-8 bg-base-100 shadow-xl my-12">
        <figure>
          <img className=" w-1/2" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Details: {descriptions}</p>
          <p>Price: {price} $</p>
          <p>Ratting: {ratting}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
