import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import Page404 from "./pages/Page404/Page404";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    async function refreshToken() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_SERVER_URL}/api/v1.0/user/refresh`,
          { refreshToken: localStorage.getItem("refreshToken") },
        );
        localStorage.setItem('accessToken', response.data.accessToken);
      } catch (err) {
        console.log(err);
      }
    }
    if (
      !localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
      refreshToken();
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
