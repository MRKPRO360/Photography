import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";
const navItems = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/services",
    text: "Services",
  },
  {
    path: "/blog",
    text: "Blog",
  },
];

const signedNav = [
  {
    path: "/myReviews",
    text: "My Reviews",
  },
  {
    path: "/addService",
    text: "Add Service",
  },
];

// add review: review
// myServices: user services
// logout or login
export default function Nav() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async function () {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-between pt-4 flex-wrap gap-10 md:gap-7">
      <Link to="/">
        <div className="flex items-center gap-2 text-2xl">
          <h1 className="font-semibold">Photgraphy</h1>
          <FaCamera className="text-amber-500" />
        </div>
      </Link>
      <div>
        <ul className="flex flex-wrap gap-4 items-center">
          {navItems.map((el, i) => (
            <NavLink
              key={i}
              to={el.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-amber-400 text-white inline-block font-semibold transition duration-300 px-3 py-2 rounded shadow-md shadow-amber-400 "
                  : "font-semibold transition duration-300 px-3 py-1 rounded"
              }
            >
              {el.text}
            </NavLink>
          ))}

          {currentUser?.uid ? (
            <>
              {signedNav.map((el, i) => (
                <NavLink
                  key={i}
                  to={el.path}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-amber-400 text-white inline-block font-semibold transition duration-300 px-3 py-2 rounded shadow-md shadow-amber-400"
                      : "font-semibold transition duration-300 px-3 py-1 rounded"
                  }
                >
                  {el.text}
                </NavLink>
              ))}
              <span
                onClick={handleLogout}
                className="cursor-pointer font-semibold transition duration-300 px-3 py-1 rounded"
              >
                Logout
              </span>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-amber-400 text-white inline-block font-semibold transition duration-300 px-3 py-2 rounded shadow-md shadow-amber-400"
                  : "font-semibold transition duration-300 px-3 py-1 rounded"
              }
            >
              Login
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
}
