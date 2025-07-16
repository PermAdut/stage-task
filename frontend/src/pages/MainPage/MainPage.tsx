import { useNavigate } from "react-router";
import Header from "../../components/Header/Header/Header";
import Introduce from "../../components/Introduce/Introduce/Introduce";
import Projects from "../../components/Projects/Projects/Projects";
import { useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";

const MainPage = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <Header />
      <Introduce />
      {/* <Projects /> */}
    </>
  );
};
export default MainPage;
