import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));
// const Details = lazy(() => import("../details/details"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="details" element={<Details></Details>}></Route> */}
      </Routes>
    </Suspense>
  );
}
