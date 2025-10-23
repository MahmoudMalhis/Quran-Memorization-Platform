import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import ErrorBoundary from "../components/ErrorBoundary";
import LoadingSpinner from "../components/LoadingSpinner";
import { Suspense } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Unauthorized = lazy(() => import("../pages/Unauthorized"));
const AdminDashboard = lazy(() => import("../pages/AdminDashboard"));
const SupervisorDashboard = lazy(() => import("../pages/SupervisorDashboard"));
const StudentDashboard = lazy(() => import("../pages/StudentDashboard"));

export default function Layout() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollTop />
        <Suspense fallback={<LoadingSpinner message="جاري تحميل الصفحة..." />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route
              path="admin/*"
              element={
                <ProtectedRoute allowedRoles={[1]}>
                  <Routes>
                    <Route index element={<AdminDashboard />} />
                    <Route path="users" element={<AdminDashboard />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
             <Route
              path="supervisor/*"
              element={
                <ProtectedRoute allowedRoles={[2]}>
                  <Routes>
                    <Route index element={<SupervisorDashboard />} />
                    <Route path="groups" element={<SupervisorDashboard />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
            <Route
              path="student/*"
              element={
                <ProtectedRoute allowedRoles={[3]}>
                  <Routes>
                    <Route index element={<StudentDashboard />} />
                    <Route path="dashboard" element={<StudentDashboard />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
