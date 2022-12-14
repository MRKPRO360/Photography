import { FaStar, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function ServiceCard({
  service: { _id, title, img, rating, price, description },
}) {
  return (
    <div className="rounded-md shadow shadow-amber-100 flex flex-col justify-between">
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
      >
        <PhotoView src={img}>
          <img
            className="object-cover object-center w-full rounded-md h-72"
            src={img}
            alt={title}
          />
        </PhotoView>
      </PhotoProvider>
      <div className="pl-1 space-y-5 font-semibold">
        <h3 className="mt-8 text-lg sm:text-xl ">{title}</h3>
        <p>
          {description.length > 100 ? (
            <span>
              {description.slice(0, 99)}{" "}
              <span className="text-amber-500">...</span>
            </span>
          ) : (
            description
          )}
        </p>
        <div className="flex items-center gap-1">
          <span>Ratings: {rating}</span> <FaStar className="text-amber-500" />
        </div>
        <div className="flex items-center gap-1">
          <span>Price:</span>
          <span className="flex items-center">
            <FaDollarSign className="text-amber-500" />
            <span>{price}</span>
          </span>
        </div>
      </div>
      <Link to={`/services/${_id}`}>
        <button className="block w-full py-[6px] mt-4 font-semibold text-center text-white transition duration-300 rounded shadow-md bg-amber-400 shadow-amber-400 hover:bg-amber-500 active:translate-y-1">
          View Details
        </button>
      </Link>
    </div>
  );
}
