import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import ErrorBoundary from "../components/ErrorBoundary";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));

export default function Layout() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
