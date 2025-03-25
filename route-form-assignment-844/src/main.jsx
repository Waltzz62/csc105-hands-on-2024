import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import FavDetailPage from "./pages/FavouriteDatialPage.jsx";
import NotfoundPage from "./pages/NotfoundPage.jsx";
import FavorPage from "./pages/FavouritesPage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true, 
        element: <HomePage />, 
      },
      
      {
        path: "/fav", 
        element: < FavorPage/>, 
      },
      {
        path: "/fav/:id", 
        element: < FavDetailPage/>, 
      },
      
    ]
  },
  {
        path: "/login", 
        element: <LoginPage />, 
      },
  {
        path: "/*", 
        element: < NotfoundPage/>, 
      },
  {
    path: "/signup", 
    element: <SignUpPage />, 
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);