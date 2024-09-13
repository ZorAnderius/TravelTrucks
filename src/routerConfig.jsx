import { createBrowserRouter } from "react-router-dom";
import { ROUTES_NAME } from "./helpers";
import React from "react";


const Home = React.lazy(() => import("./pages/Home/Home"));
const Catalog = React.lazy(() => import("./pages/Catalog/Catalog"));
const CatalogDetails = React.lazy(() => import("./pages/CatalogDetails/CatalogDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

import App from "./App";
import { VehicleReviews } from "./components";

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
      {
        path: ROUTES_NAME.vehicleById,
        element: <CatalogDetails />,
        children: [
          {
            path: ROUTES_NAME.vehicleReview,
            element: <VehicleReviews />,
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
