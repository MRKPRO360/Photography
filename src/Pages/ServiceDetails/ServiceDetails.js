import { useLoaderData } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";
export default function ServiceDetails() {
  const serviceDetails = useLoaderData();
  const { img, price, rating, title, description } = serviceDetails;

  return (
    <div>
      <div className="flex flex-col gap-8 md:flex-row">
        <img
          className="w-96 object-cover object-center rounded-md h-80"
          src={img}
          alt={title}
        />
        <div className="flex-1 flex flex-col justify-between space-y-4 md:space-y-0">
          <h2 className="text-xl sm:text-3xl font-semibold">{title}</h2>
          <p className=" font-medium">{description}</p>
          <div className="flex items-center gap-1 font-semibold">
            <span>Ratings: {rating}</span> <FaStar className="text-amber-500" />
          </div>
          <div className="flex items-center gap-1 font-semibold">
            <span>Price:</span>
            <span className="flex items-center">
              <FaDollarSign className="text-amber-500" />
              <span>{price}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
