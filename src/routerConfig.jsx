import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { ROUTES_NAME } from "./helpers";
import App from "./App";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Catalog = React.lazy(() => import("./pages/Catalog/Catalog"));
const CatalogDetails = React.lazy(() => import("./pages/CatalogDetails/CatalogDetails"));
const VehicleFeature = React.lazy(() => import("./components/VehicleFeature/VehicleFeature"));
const VehicleReviews = React.lazy(() => import("./components/VehicleReviews/VehicleReviews"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));


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
            path: ROUTES_NAME.vehicleFeature,
            element: <VehicleFeature />,
          },
          {
            path: ROUTES_NAME.vehicleReview,
            element: <VehicleReviews />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
