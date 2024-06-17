// CSS Imports
import "./index.css";

// Library Imports
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Component Imports
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
