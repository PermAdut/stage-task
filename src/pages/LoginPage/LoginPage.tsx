import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import LoginInput from "../../components/Login/LoginInput/LoginInput";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { authUser } from "../../store/actions/authUser";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const {error, isAuthenticated} = useAppSelector((state) => state.user);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(authUser({userName, password}));
    if (!error) {
      navigate("/");
    }
  };
  useEffect(() => {
    if(isAuthenticated){
      navigate(-1);
    }
  }, [])
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
      </div>
    </div>
  );
};
export default LoginPage;
