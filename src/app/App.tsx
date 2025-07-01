import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./route";
import Loader from "../shared/ui/Loader";

export function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={route} />
    </Suspense>
  );
}