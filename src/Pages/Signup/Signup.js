import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
// import SetAuthToken from "../../Utils/SetAuthToken";

export default function Signup() {
  const { signup, googleLogin } = useAuth();

  const navigate = useNavigate("/");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleSignup = async function (e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setError("");
      setLoading(true);
      await signup(email, password, name);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.log(err);
    }
  };

  const handleGoogleLogin = async function () {
    try {
      setError("");
      const result = await googleLogin();
      const user = result.user;
      //   const data = await SetAuthToken(user);

      //   if (data.token) {
      //     navigate(from, { replace: true });
      //   }
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <form
        className="py-8 min-h-[490px] space-y-8 shadow rounded-md shadow-blue-100"
        onSubmit={handleSignup}
      >
        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="username"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="username"
            name="name"
            className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="Your name"
            required
          />
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <label
            className="block w-40 font-bold text-gray-500 "
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="**********"
            required
          />
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3">
          <p className="text-red-500 font-regular">{error}</p>
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto md:w-2/3 ">
          <div className="w-40"></div>
          <div className="flex flex-col flex-wrap w-full gap-3 sm:flex-row sm:items-center sm:gap-2 xl:flex-nowrap ">
            <button
              disabled={loading}
              type="submit"
              className="w-32 px-4 py-2 text-base font-semibold text-white transition duration-300 bg-blue-400 rounded hover:bg-blue-500"
            >
              Sign Up
            </button>
            <span className="mr-[60%] xl:mr-0">Or, login with </span>
            <div
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-32 gap-2 px-4 py-2 text-base font-semibold text-blue-500 transition duration-300 border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white"
            >
              <FaGoogle />
              <span>Google</span>
            </div>
          </div>
        </div>

        <div className="flex items-center w-11/12 gap-4 mx-auto font-bold text-gray-500 md:w-2/3">
          <p>
            Already have an account &nbsp;
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>
            &nbsp; instead.
          </p>
        </div>
      </form>
    </div>
  );
}
