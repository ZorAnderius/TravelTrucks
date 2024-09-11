import { createBrowserRouter } from "react-router-dom";
import { ROUTES_NAME } from "./helpers";
import { Catalog, Home } from "./pages";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: ROUTES_NAME.home,
    element: <App />,
    children: [
      {
        path: ROUTES_NAME.home,
        element: <Home />,
      },
      {
        path: ROUTES_NAME.catalog,
        element: <Catalog />,
      },
    ],
  },
]);
