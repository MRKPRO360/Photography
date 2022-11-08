import { FaStar, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ServiceCard({
  service: { _id, title, img, rating, price, description },
}) {
  return (
    <div className="rounded-md shadow shadow-amber-100">
      <img
        className="object-cover object-center w-full rounded-md h-72"
        src={img}
        alt={title}
      />
      <div className="pl-1 space-y-5">
        <h3 className="mt-8 text-lg font-semibold">{title}</h3>
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
