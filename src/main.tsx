import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { AppProvider } from "./context/appContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
