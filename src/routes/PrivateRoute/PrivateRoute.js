import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { useAuth } from "../../Context/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <FadeLoader color="rgb(251,191,36)" />
      </div>
    );
  }
  return currentUser?.uid ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
}
