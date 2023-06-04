import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));
const Details = lazy(() => import("../details/details"));
const Error = lazy(() => import("../error/error"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="details/:id" element={<Details></Details>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
}
