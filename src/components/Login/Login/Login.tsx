import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import LoginInput from "../LoginInput/LoginInput";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { loginUser } from "../../../store/slices/userSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.user.error);
  const isAuth = useAppSelector((state) => state.user.isAuthenticated);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleClick = async () => {
    await dispatch(loginUser({ userName, password }));
  };
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);
  return (
    <div className={styles.login_content}>
      <div className={styles.login_wrapper}>
        <h1 className={styles.login_title}>Login</h1>
        {errors && <h3 className={styles.login_errors}>{errors}</h3>}
        <LoginInput title="Name:" placeHolder="Name" setInfo={setUserName} />
        <LoginInput
          title="Password:"
          placeHolder="Password"
          setInfo={setPassword}
        />
        <button className={styles.login_btn} onClick={handleClick}>
          submit
        </button>
      </div>
    </div>
  );
};
export default Login;
