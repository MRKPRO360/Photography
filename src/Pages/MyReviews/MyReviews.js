import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../Context/AuthContext";
import useTitle from "../../hooks/useTitle";
import MyReviewCard from "./MyReviewCard";

export default function MyReviews() {
  useTitle("My Reviews");
  const { currentUser } = useAuth();
  const [reviews, setReviews] = useState([{}]);

  const handleDeleteReview = async function (id) {
    try {
      const confirmation = window.confirm(
        "Are you sure to delete this review?"
      );

      if (confirmation) {
        const res = await fetch(
          `https://photography-server-eight.vercel.app/review/${id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                "photography-token"
              )}`,
            },
          }
        );
        const data = await res.json();

        if (data.deletedCount > 0) {
          const rest = reviews.filter((review) => review._id !== id);
          setReviews(rest);
          toast.success("Review deleted successfully ", {
            duration: 3000,
            icon: "😂",
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchMyReviews = async function () {
      try {
        const res = await fetch(
          `https://photography-server-eight.vercel.app/review?email=${currentUser?.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem(
                "photography-token"
              )}`,
            },
          }
        );
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMyReviews();
  }, [currentUser?.email]);

  return (
    <div>
      <h2 className="text-2xl mb-16 font-semibold underline underline-offset-8 decoration-4 decoration-amber-500">
        My All Reviews
      </h2>

      {reviews.length > 0 && reviews[0]._id ? (
        <div className="space-y-10">
          {reviews.map((review, i) => (
            <MyReviewCard
              handleDeleteReview={handleDeleteReview}
              key={i}
              review={review}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[70vh] text-lg font-semibold">
          No reviews were added.
        </div>
      )}
    </div>
  );
}
