import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../Context/AuthContext";
import MyReviewCard from "./MyReviewCard";

export default function MyReviews() {
  const { currentUser } = useAuth();
  const [reviews, setReviews] = useState([{}]);

  const handleDeleteReview = async function (id) {
    console.log(id);
    try {
      const confirmation = window.confirm(
        "Are you sure to delete this review?"
      );

      if (confirmation) {
        const res = await fetch(`http://localhost:5000/review/${id}`, {
          method: "DELETE",
        });
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
          `http://localhost:5000/review?email=${currentUser?.email}`
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
      {reviews.length > 0 ? (
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
