import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";

// To start usint React Router, install react-router-dom
// ---> npm install react-router-dom

// STEP 1: import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// STEP 2:
// ---> createBrowserRouter is used to create the router for our application. 
// We'll pass it an array of route objects as its argument.
// Each object will have a routing path and a corresponding element to be rendered on that path.

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

// STEP 3:
// ---> RouterProvider provides the router created by createBrowserRouter to our application,
// so it can use React-Router's client-side routing.

// STEP 4: (at ./components/NavBar.js)

root.render(<RouterProvider router={router} />);