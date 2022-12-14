import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        loader: () =>
          fetch("https://photography-server-eight.vercel.app/services"),
        element: <Services />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://photography-server-eight.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        loader: ({ params }) =>
          fetch(
            `https://photography-server-eight.vercel.app/review/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
// https://photography-server-eight.vercel.app/
