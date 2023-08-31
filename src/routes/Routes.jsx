import Home from '../components/Home';
import Books from '../components/Books';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import BookDetails from '../components/BookDetails';
import ErrorMessage from '../error/ErrorMessage';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

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
        element: <Contact/>,
      },
    ],
  },
]);
