import { Link, NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
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

// add review: review
// myServices: user services
// logout or login
export default function Nav() {
  return (
    <div className="flex items-center justify-between pt-4">
      <Link to="/">
        <div className="flex items-center gap-2 text-2xl">
          <h1 className="font-semibold">Foodie</h1>
          <FaPizzaSlice className="text-amber-500" />
        </div>
      </Link>
      <div className="">
        <ul className="space-x-3">
          {navItems.map((el, i) => (
            <NavLink
              key={i}
              to={el.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-amber-500 text-white font-semibold transition duration-300 px-3 py-2 rounded shadow-md shadow-amber-400"
                  : "font-semibold transition duration-300 px-3 py-1 rounded"
              }
            >
              {el.text}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
