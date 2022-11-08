import { useLoaderData, Link } from "react-router-dom";
import { FaStar, FaDollarSign } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReviewCard from "./ReviewCard";
export default function ServiceDetails() {
  const { currentUser } = useAuth();

  const [serviceReviews, setServiceReviews] = useState([]);
  const [ratings, setRatings] = useState(5);

  const serviceDetails = useLoaderData();
  const { _id, img, price, rating, title, description } = serviceDetails;

  useEffect(() => {
    const fetchReviews = async function () {
      try {
        const res = await fetch(
          `http://localhost:5000/review?serviceName=${title}`
        );
        const data = await res.json();
        setServiceReviews(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchReviews();
  }, [title]);

  const handleSubmit = async function (e) {
    e.preventDefault();
    const form = e.target;
    const text = form.textbox.value;

    const review = {
      serviceName: title,
      serviceId: _id,
      rating: ratings,
      description: text,
      email: currentUser.email,
      author: currentUser.displayName,
      img: currentUser.photoURL,
      createdAt: new Date().toISOString(),
    };

    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      };

      const res = await fetch("http://localhost:5000/review", config);
      const data = await res.json(review);

      if (data.acknowledged) {
        toast.success("Review added successfully ", {
          duration: 3000,
          icon: "😍",
        });
        form.reset();
      }
    } catch (err) {}
  };

  return (
    <div>
      {/* Service Details */}

      <div className="flex flex-col gap-8 md:flex-row">
        <img
          className="object-cover object-center rounded-md w-96 h-80"
          src={img}
          alt={title}
        />
        <div className="flex flex-col justify-between flex-1 space-y-4 md:space-y-0">
          <h2 className="text-xl font-semibold sm:text-3xl">{title}</h2>
          <p className="font-medium ">{description}</p>
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

      {/* Review Section */}

      {currentUser?.uid ? (
        <div className="mt-28">
          {/* Show all review for this service */}
          {serviceReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
          {/* Create a review */}
          <div className="mt-20">
            <h2 className="mb-10 text-xl font-semibold sm:text-3xl">
              Add a review for {title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex ">
                <label className="w-20 font-semibold sm:w-32" htmlFor="textbox">
                  Details:
                </label>
                <textarea
                  className="flex-1 px-1 rounded-md ring-amber-400 focus:outline-none ring-2 focus:ring-amber-500"
                  name="textbox"
                  id="textbox"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="flex items-center">
                <label htmlFor="rating" className="w-20 font-semibold sm:w-32">
                  Rating:
                </label>
                <select
                  name="rating"
                  id="rating"
                  onClick={(e) => setRatings(e.target.value)}
                  className="p-1 rounded-md ring-amber-400 focus:outline-none ring-2 focus:ring-amber-500"
                  defaultValue="5"
                >
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button className="block px-4 py-[6px] mt-4 font-semibold text-center text-white transition duration-300 rounded shadow-md bg-amber-400 shadow-amber-400 hover:bg-amber-500 active:translate-y-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="mt-20 text-xl font-semibold">
          <p>
            Please &nbsp;
            <Link className="underline text-amber-500" to="/login">
              Login
            </Link>
            &nbsp; to add a review.
          </p>
        </div>
      )}
    </div>
  );
}
