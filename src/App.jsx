import { BrowserRouter, Route, Routes } from "react-router";
import MembersTable from "./features/members/MembersTable";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import MembersPage from "./pages/MembersPage";
import PlansPage from "./pages/PlansPage";
import AdminsPage from "./pages/AdminsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/admins" element={<AdminsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
