import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ErrorBoundary } from "../shared/ui/ErrorBoundary";
import {Layout} from "./Layout.tsx";

const RequestsListPage = lazy(() => import("../pages/RequestsList"));
const RequestDetailPage = lazy(() => import("../pages/RequestDetail"));
const RequestCreatePage = lazy(() => import("../pages/RequestCreate"));

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <RequestsListPage />,
      },
      {
        path: "requests",
        children: [
          {
            index: true,
            element: <RequestsListPage />,
          },
          {
            path: "new",
            element: <RequestCreatePage />,
          },
          {
            path: ":id",
            element: <RequestDetailPage />,
          },
        ],
      },
    ],
  },
]);