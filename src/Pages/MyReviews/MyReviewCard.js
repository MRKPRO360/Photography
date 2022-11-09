import React from "react";
import { FaStar } from "react-icons/fa";
export default function MyReviewCard({
  review: { serviceName, rating, serviceImg, description, createdAt },
}) {
  return (
    <div className="shadow-sm shadow-amber-100 p-4 space-y-5">
      <div className="flex justify-between items-center  rounded flex-col sm:flex-row gap-4 sm:gap-0">
        <div className="flex flex-col items-center gap-1">
          <img className="w-28 rounded-md" src={serviceImg} alt={serviceName} />
          <span>{serviceName}</span>
        </div>
        <p className="font-semibold">{description}</p>
        <div className="flex flex-col items-center gap-1 font-semibold">
          <p>Review Added:</p>
          <span>{new Date(createdAt).toLocaleTimeString()}</span>
        </div>
        <div className="flex items-center gap-1 font-semibold">
          <span>Ratings: {rating}</span> <FaStar className="text-amber-500" />
        </div>
      </div>
      <div className="flex gap-4 sm:justify-start justify-center flex-wrap sm:flex-nowrap">
        <button className=" inline-block px-3 py-2 text-center text-white transition duration-300 bg-amber-400 rounded shadow-md shadow-amber-400 hover:bg-amber-500 active:translate-y-1">
          Update Review
        </button>
        <button className=" inline-block px-4 py-2 text-center text-white transition duration-300 bg-red-400 rounded shadow-md shadow-red-400 hover:bg-red-500 active:translate-y-1">
          Delete Review
        </button>
      </div>
    </div>
  );
}
