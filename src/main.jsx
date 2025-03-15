import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


// import About from "./pages/About";
// import Contact from "./pages/Contact";
import RouterConnection from "./connection/RouterConnection";
import Home from "./pages/Private/Home";
import { NavProvider } from "./providers/NavContext";
// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterConnection />, // Main Layout
    children: [
      { path: "/", element: <Home/> },
      // { path: "/about", element: <About /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);

// Render the app with RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <NavProvider>
      <RouterProvider router={router} />
      </NavProvider>
   
  </StrictMode>
);
