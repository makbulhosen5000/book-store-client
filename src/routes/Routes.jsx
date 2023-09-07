import Home from "../components/Home/Home";
import Books from "../components/Books/Books";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import BookDetails from "../components/Books/BookDetails";
import ErrorMessage from "../error/ErrorMessage";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "bookDetails/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element:<Login/>
      },
      {
        path: "register",
        element:<Register/>
      },
    ],
  },
]);
