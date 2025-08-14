import { useEffect, useState } from "react";
import { checkAuth } from "../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./redux";
export default function usePerfomAuth() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.user.isAuthenticated);
  const [isInitialCheckDone, setIsInitialCheckDone] = useState<boolean>(false);
  useEffect(() => {
    const performAuthCheck = async () => {
      if (!isAuth) {
        await dispatch(checkAuth());
      }
      setIsInitialCheckDone(true);
    };
    performAuthCheck();
  }, []);
  return isInitialCheckDone;
}
