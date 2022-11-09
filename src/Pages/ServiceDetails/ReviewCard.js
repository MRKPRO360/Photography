import { FaStar } from "react-icons/fa";

export default function ReviewCard({
  review: { description, rating, img, author, serviceName },
}) {
  return (
    <div className="flex justify-between items-center shadow-sm shadow-amber-100 rounded p-4 xs:flex-col xs:gap-4 ">
      <div className="flex flex-col items-center gap-1">
        <img className="w-16 rounded-md" src={img} alt={serviceName} />
        <span>{author}</span>
      </div>
      <p className="font-semibold">{description}</p>
      <div className="flex items-center gap-1 font-semibold">
        <span>Ratings: {rating}</span> <FaStar className="text-amber-500" />
      </div>
    </div>
  );
}
