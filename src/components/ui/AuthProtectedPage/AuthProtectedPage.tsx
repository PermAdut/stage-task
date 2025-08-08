import { Navigate } from "react-router";
import { useAppSelector } from "../../../hooks/redux";

type AuthPageProps = {
  children: React.ReactNode;
};

const AuthProtectedPage = ({ children }: AuthPageProps) => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthProtectedPage;
