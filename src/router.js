import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Prestations from "./pages/Prestations/Prestations";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Prestation from "./components/Prestations/Prestation/Prestation";
import Forfait from "./components/Prestations/Forfait/Forfait";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/prestations",
        element: <Prestations />,
        children: [
          {
            path: ":service",
            element: <Prestation />,
          },
          {
            path: "forfait",
            element: <Forfait />,
          },
        ],
      },
    ],
  },
]);
