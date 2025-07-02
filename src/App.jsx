import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import MembersPage from "./pages/MembersPage";
import PlansPage from "./pages/PlansPage";
import AdminsPage from "./pages/AdminsPage";
import SettingsPage from "./pages/SettingsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MemberDetail from "./features/members/MemberDetail";

const BASE_URL = "admin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to={`${BASE_URL}/dashboard`} />}
            />
            <Route path={`${BASE_URL}/dashboard`} element={<HomePage />} />
            <Route path={`${BASE_URL}/plans`} element={<PlansPage />} />
            <Route path={`${BASE_URL}/members`} element={<MembersPage />} />
            <Route
              path={`${BASE_URL}/members/:memberId`}
              element={<MemberDetail />}
            />
            <Route path={`${BASE_URL}/admins`} element={<AdminsPage />} />
            <Route path={`${BASE_URL}/settings`} element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
