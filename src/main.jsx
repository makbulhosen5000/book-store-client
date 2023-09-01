import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {RouterProvider } from "react-router-dom";
import { router } from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router}>

    </RouterProvider>
  </HelmetProvider>
);
