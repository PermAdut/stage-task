import { Navigate } from "react-router";
import { useAppSelector } from "../../../hooks/redux";
type AuthPageProps = {
  children: React.ReactNode;
};
const AuthProtectedPage = (props: AuthPageProps) => {
  const isAuth = useAppSelector((state) => state.user.isAuthenticated);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  } else {
    return props.children;
  }
};
export default AuthProtectedPage;