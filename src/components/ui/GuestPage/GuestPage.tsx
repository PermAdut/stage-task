import { type JSX } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { Navigate } from "react-router";

type GuestPageProps = {
  children: JSX.Element;
};

const GuestPage = (props: GuestPageProps) => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return props.children;
};
export default GuestPage;
