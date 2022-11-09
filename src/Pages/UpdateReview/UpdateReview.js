import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function UpdateReview() {
  const review = useLoaderData();
  const navigate = useNavigate();

  const [ratings, setRatings] = useState(5);

  const handleUpdate = async function (e) {
    e.preventDefault();
    const form = e.target;
    const text = form.textbox.value;

    const updatedReview = {
      rating: ratings,
      description: text || review.description,
      createdAt: undefined,
      updatedAt: new Date().toISOString(),
    };

    try {
      const config = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      };
      const res = await fetch(
        `http://localhost:5000/review/${review._id}`,
        config
      );
      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Review updated successfully ", {
          duration: 3000,
          icon: "😎",
        });
        setTimeout(() => {
          navigate(-1);
        }, 200);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-20">
      <form onSubmit={handleUpdate} className="space-y-8">
        <div className="flex ">
          <label className="w-20 font-semibold sm:w-32" htmlFor="textbox">
            Details:
          </label>
          <textarea
            className="flex-1 px-1 rounded-md ring-amber-400 focus:outline-none ring-2 focus:ring-amber-500"
            name="textbox"
            id="textbox"
            rows="6"
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
  );
}
