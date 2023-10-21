import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { AppProvider } from "./context/appContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppProvider />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
