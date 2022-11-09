import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import MyReviewCard from "./MyReviewCard";

export default function MyReviews() {
  const { currentUser } = useAuth();
  const [reviews, setReviews] = useState([{}]);

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
            <MyReviewCard key={i} review={review} />
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
