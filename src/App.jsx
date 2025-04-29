import { createBrowserRouter } from "react-router";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import LawyerDetails from "./components/LawyerDetails/LawyerDetails";
import Bookings from "./components/Bookings/Bookings";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import NoLawyerError from "./components/NoLawyerError/NoLawyerError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/lawyers.json"),
      },
      {
        path: "/lawyerDetails/:licenseNumber",
        Component: LawyerDetails,
        errorElement: <NoLawyerError />,
        loader: async ({ params }) => {
          const res = await fetch("/lawyers.json");
          if (!res.ok) {
            throw new Response("Unable to fetch lawyers", { status: 500 });
          }
          const lawyers = await res.json();
          const lawyer = lawyers.find(
            (l) => l.license_number === params.licenseNumber
          );
          if (!lawyer) {
            throw new Response("Not Found", { status: 404 });
          }
          return lawyer;
        },
      },
      {
        path: "/bookings",
        Component: Bookings,
      },
      {
        path: "/blogs",
        Component: Blogs,
        loader: () => fetch("/blogs.json"),
      },
    ],
  },
]);
