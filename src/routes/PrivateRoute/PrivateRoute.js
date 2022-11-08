import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser?.uid ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
}
