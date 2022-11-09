import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function MyReviewCard({
  review: { serviceName, rating, serviceImg, description, createdAt, _id },
  handleDeleteReview,
}) {
  return (
    <div className="shadow-sm shadow-amber-100 p-4 space-y-5">
      <div className="flex justify-between items-center  rounded flex-col lg:flex-row gap-4 lg:gap-0">
        <div className="flex flex-col items-center gap-1">
          <img
            className="w-28 h-[168px] object-cover rounded-md"
            src={serviceImg}
            alt={serviceName}
          />
          <span className="font-semibold">{serviceName}</span>
        </div>
        <p className="font-semibold">{description}</p>
        <div className="flex flex-col items-center gap-1 font-semibold">
          <p>Review Added:</p>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1 font-semibold">
          <span>Ratings: {rating}</span> <FaStar className="text-amber-500" />
        </div>
      </div>
      <div className="flex gap-4 lg:justify-start justify-center flex-wrap lg:flex-nowrap">
        <Link to={`/updateReview/${_id}`}>
          <button className=" inline-block px-3 py-2 text-center text-white transition duration-300 bg-amber-400 rounded shadow-md shadow-amber-400 hover:bg-amber-500 active:translate-y-1">
            Update Review
          </button>
        </Link>
        <button
          className=" inline-block px-4 py-2 text-center text-white transition duration-300 bg-red-400 rounded shadow-md shadow-red-400 hover:bg-red-500 active:translate-y-1"
          onClick={() => handleDeleteReview(_id)}
        >
          Delete Review
        </button>
      </div>
    </div>
  );
}
