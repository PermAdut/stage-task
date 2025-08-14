import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import Page404 from "./pages/Page404/Page404";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import AuthProtectedPage from "./components/ui/AuthProtectedPage/AuthProtectedPage";
import usePerfomAuth from "./hooks/usePerfomAuth";
function App() {
  const isInitialCheckDone = usePerfomAuth();
  if (!isInitialCheckDone) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route
          path="/"
          element={<AuthProtectedPage children={<MainPage />} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
