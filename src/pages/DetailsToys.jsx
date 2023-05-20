import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsToys = () => {
  const detailsToyData = useLoaderData();
  const {
    picture,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    description,
  } = detailsToyData;
  return (
    
      <div className="block text-center justify-center gap-4 items-center bg-base-100 mx-auto mb-4">
        <div>
        <figure className="w-72 mx-auto text-center lg:mx-[530px] lg:w-[430px]">
          <img
            src={picture}
            alt="toy picture"
            className="rounded-xl"
          />
        </figure>
        </div>
        <div className="mx-10 mt-3">
          <h2 className="text-2xl lg:text-4xl font-semibold lg:font-bold text-pink-400"><span className="text-blue-400">Toy Name:</span> {name}</h2>
          <p className="text-sm lg:text-xl mt-1"><span className="text-blue-400">Seller name:</span> {sellerName}</p>
          <p className="text-sm lg:text-xl"><span className="text-blue-400">Seller email:</span> {sellerEmail}</p>
          <p className="text-lg lg:text-2xl font-semibold">Price : <span className="text-pink-400">${price}</span></p>
          <p className="text-sm lg:text-xl">Rating : {rating}</p>
          <p className="text-sm lg:text-xl">Available Quantity : {availableQuantity}</p>
          <p className="text-sm lg:text-xl">Description : {description}</p>
        </div>
      </div>
    
  );
};

export default DetailsToys;
