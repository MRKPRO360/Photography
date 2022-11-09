import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { FadeLoader } from "react-spinners";
import useTitle from "../../hooks/useTitle";

export default function Login() {
  useTitle("Login");
  const { login, googleLogin, loading: processing } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async function (e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setError("");
      setLoading(true);
      const result = await login(email, password);
      const user = result.user;
      const currentUser = {
        email: user.email,
      };

      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      };

      const res = await fetch("http://localhost:5000/jwt", config);
      const data = await res.json();

      localStorage.setItem("photography-token", data.token);
      if (data.token) {
        // Won't work if it's not added :) First user is set up then the link in the navbar and then we can go.
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 300);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.log(err);
    }
  };

  const handleGoogleLogin = async function () {
    try {
      setError("");
      await googleLogin();

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 300);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      {processing ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <FadeLoader color="rgb(251,191,36)" />
        </div>
      ) : (
        <form
          className="py-8 min-h-[490px] space-y-8 shadow rounded-md shadow-amber-100"
          onSubmit={handleLogin}
        >
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
              className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-amber-500"
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
              className="w-full px-4 py-2 leading-tight transition duration-300 border-2 border-gray-200 rounded-md appearance-none bg-gray-50 focus:outline-none focus:bg-white focus:border-amber-500"
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
                className="w-32 px-4 py-2 text-base font-semibold text-white transition duration-300 rounded bg-amber-400 hover:bg-amber-500"
              >
                Login
              </button>
              <span className="mr-[60%] xl:mr-0">Or, login with </span>
              <div
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-32 gap-2 px-4 py-2 text-base font-semibold transition duration-300 border rounded cursor-pointer text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white"
              >
                <FaGoogle />
                <span>Google</span>
              </div>
            </div>
          </div>

          <div className="flex items-center w-11/12 gap-4 mx-auto font-bold text-gray-500 md:w-2/3">
            <p>
              Already have an account &nbsp;
              <Link className="underline text-amber-500" to="/signup">
                Signup
              </Link>
              &nbsp; instead.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
