import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
// import Home from "../../Pages/Home/Home/Banner";
import Services from "../../Pages/Services/Services";

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
        loader: () => fetch("http://localhost:5000/services"),
        element: <Services />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
