import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./screens/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Counter from "./screens/Counter.js";
import Agenda from "./screens/Agenda.js";
import Home from "./screens/Home.js";
import Typer from "./screens/Typer.js";
import Weather from "./screens/Weather.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/agenda",
        element: <Agenda day="Lundi" />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/typer",
        element: <Typer />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
