import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import Page404 from "./pages/Page404/Page404";
import LoginPage from "./pages/LoginPage/LoginPage";
import AuthProtectedPage from "./components/ui/AuthProtectedPage/AuthProtectedPage";
import GuestPage from "./components/ui/GuestPage/GuestPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route
          path="/"
          element={<AuthProtectedPage children={<MainPage />} />}
        />
        <Route
          path="/login"
          element={
            <GuestPage>
              <LoginPage />
            </GuestPage>
          }
        />
      </Routes>
    </>
  );
}

export default App;
