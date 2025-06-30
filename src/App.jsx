import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import MembersTable from "./features/members/MembersTable";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import MembersPage from "./pages/MembersPage";
import PlansPage from "./pages/PlansPage";
import AdminsPage from "./pages/AdminsPage";
import SettingsPage from "./pages/SettingsPage";

const BASE_URL = "admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={`${BASE_URL}`} />} />
          <Route path={`${BASE_URL}/dashboard`} element={<HomePage />} />
          <Route path={`${BASE_URL}/plans`} element={<PlansPage />} />
          <Route path={`${BASE_URL}/members`} element={<MembersPage />} />
          <Route path={`${BASE_URL}/admins`} element={<AdminsPage />} />
          <Route path={`${BASE_URL}/settings`} element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
