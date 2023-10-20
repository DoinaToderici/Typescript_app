import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { AppProvider } from "./context/appContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/home/Home.tsx";
import Dashboard from "./assets/pages/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  </AppProvider>
);
