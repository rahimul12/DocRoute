import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Layout/Dashboard";
import AddDoctor from "./Pages/AddDoctor/AddDoctor";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AppoienmentPage from "./Pages/Appoientment/AppoienmentPage";
import DoctorAllAppoienments from "./Pages/Dashboard/DoctorAllAppoienments";
import DoctorDashboard from "./Pages/Dashboard/DoctorDashboard";
import DoctorProfileSettings from "./Pages/Dashboard/DoctorProfileSettings";
import DoctorScheduleTimings from "./Pages/Dashboard/DoctorScheduleTimings";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import Doctors from "./Pages/Doctors/Doctors";
import Home from "./Pages/Home/Home";
import PrivetRoutes from "./PrivateRoutes/PrivetRoutes";
import AdminDashboardData from "./compontents/AdminDashborad/AdminDashboradData/AdminDashboardData";
import AllDocros from "./compontents/AdminDashborad/AllDoctors/AllDocros";
import AllPatients from "./compontents/AdminDashborad/AllPatients/AllPatients";
import ApplyingDoctors from "./compontents/AdminDashborad/ApplyingDoctors/ApplyingDoctors";
import DashboardData from "./compontents/DoctorDashboard/DashboardData";
import useAuthCheck from "./hooks/useAuthChekc";
import Loading from "./utils/Loading";
import Login from "./utils/Login";
import Register from "./utils/Register";
// const LazyLoading = React.lazy(()=>import('./utils/Loading'))
const LazyMain = React.lazy(() => import("./Layout/Main"));

function App() {
  const [category, setCategory] = useState(null);
  const authChek = useAuthCheck();
  const { user } = useSelector((state) => state.userData);
  //  console.log(user);
  useEffect(() => {
    if (user?.email && user?.category) {
      setCategory(user?.category);
    }
  }, [user?.email, user?.category]);

  console.log(category);

  return !authChek ? (
    <div>Check authentication ...</div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyMain />
            </React.Suspense>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path={`/doctors/:id`} element={<DoctorProfile />} />
          <Route
            path={`/appointment/:id`}
            element={
              <PrivetRoutes>
                <AppoienmentPage />
              </PrivetRoutes>
            }
          />
        </Route>

        <Route
          path="/dashboard"
          element={
            <PrivetRoutes>
              <Dashboard />
            </PrivetRoutes>
          }
        >
          <Route path="/dashboard" element={<DoctorDashboard />}>
            <Route index element={<DashboardData />} />
            <Route
              path="/dashboard/all-appoienments"
              element={
                <PrivetRoutes>
                  <DoctorAllAppoienments />
                </PrivetRoutes>
              }
            />
            <Route
              path="/dashboard/doc-profile-settings"
              element={
                <PrivetRoutes>
                  <DoctorProfileSettings />
                </PrivetRoutes>
              }
            />
            <Route
              path="/dashboard/schedule-timings"
              element={
                <PrivetRoutes>
                  <DoctorScheduleTimings />
                </PrivetRoutes>
              }
            />
            <Route>{/* Route */}</Route>
          </Route>

          {/* <Route path="dashboard" element={<PatientDashboard />} /> */}
        </Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<AdminDashboardData />} />
          <Route
            path="/admin-dashboard/applying-doctos"
            element={<ApplyingDoctors />}
          />
          <Route path="/admin-dashboard/all-doctors" element={<AllDocros />} />
          <Route
            path="/admin-dashboard/all-patients"
            element={<AllPatients />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
