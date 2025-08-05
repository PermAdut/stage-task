import { Link, useNavigate } from "react-router";
import styles from "./Login.module.css";
import LoginInput from "../../ui/LoginInput/LoginInput";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { loginUser } from "../../../store/slices/userSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const {error, isAuthenticated} = useAppSelector((state) => state.user);
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleClick = async () => {
    await dispatch(loginUser({ username, password }));
  };
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [navigate, isAuthenticated]);
  return (
    <div className={styles.login_content}>
      <div className={styles.login_wrapper}>
        <h1 className={styles.login_title}>Login</h1>
        {error && <h3 className={styles.login_errors}>{error}</h3>}
        <LoginInput title="Name:" placeHolder="Name" setInfo={setUserName} />
        <LoginInput
          title="Password:"
          placeHolder="Password"
          setInfo={setPassword}
        />
        <button className={styles.login_btn} onClick={handleClick}>
          submit
        </button>
        <h4>Not registered? <Link to={'/signup'}>sign up</Link></h4>
      </div>
    </div>
  );
};
export default Login;
