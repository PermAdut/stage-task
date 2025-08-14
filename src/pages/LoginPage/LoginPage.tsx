import { Link, useNavigate } from "react-router";
import styles from "./Login.module.css";
import LoginInput from "../../components/ui/LoginInput/LoginInput";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { loginUser } from "../../store/slices/userSlice";
import { useForm } from "react-hook-form";

export type LoginFormData = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { error, isAuthenticated } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    await dispatch(loginUser({ ...data }));
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [navigate, isAuthenticated]);
  return (
    <div className={styles.login_content}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.login_wrapper}>
          <h1 className={styles.login_title}>Login</h1>
          {error && <h3 className={styles.login_errors}>{error}</h3>}
          <LoginInput
            title="Name:"
            placeHolder="Name"
            register={register("username")}
          />
          <LoginInput
            title="Password:"
            placeHolder="Password"
            register={register("password")}
          />
          <button className={styles.login_btn} type="submit">
            submit
          </button>
          <h4>
            Not registered? <Link to={"/signup"}>sign up</Link>
          </h4>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
