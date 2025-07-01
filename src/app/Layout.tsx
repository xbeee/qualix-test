import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../shared/ui/Loader";

export function Layout() {
  return (
    <Suspense fallback={<Loader />}>
      <div className={'wrapper'}>
        <div className="container">
          <Outlet/>
        </div>
      </div>

    </Suspense>
  );
}