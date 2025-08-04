import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import Page404 from "./pages/Page404/Page404";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { checkAuth } from "./store/slices/userSlice";
import AuthProtectedPage from "./components/ui/AuthProtectedPage/AuthProtectedPage";
function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.user.isAuthenticated);
  useEffect(() => {
    if(!isAuth)
      dispatch(checkAuth());
  }, []);
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
