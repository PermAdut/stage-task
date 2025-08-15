import { useEffect } from "react";
import styles from "./SignUp.module.css";
import LoginInput from "../../components/ui/LoginInput/LoginInput";
import { Link, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { registerUser } from "../../store/slices/userSlice";
import { useForm } from "react-hook-form";

export type RegisterFormData = {
  username: string;
  firstName: string;
  lastName: string;
  age: string;
  password: string;
  repeatPassword: string;
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, isAuthenticated } = useAppSelector((state) => state.user);

  const { register, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      age: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data);
    await dispatch(
      registerUser({
        ...data,
        age: parseInt(data.age),
      }),
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);
  return (
    <div className={styles.sign_content}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.sign_wrapper}>
          <h1 className={styles.sign_title}>SignUp</h1>
          {error && <h3 className={styles.sign_errors}>{error}</h3>}
          <LoginInput
            title="Username:"
            placeHolder="Username"
            register={register("username")}
          />
          <LoginInput
            title="First name:"
            placeHolder="First name"
            register={register("firstName")}
          />
          <LoginInput
            title="Last name:"
            placeHolder="Last name"
            register={register("lastName")}
          />
          <LoginInput
            title="Age:"
            placeHolder="Age"
            register={register("age")}
          />
          <LoginInput
            title="Password:"
            placeHolder="Password"
            register={register("password")}
          />
          <LoginInput
            title="Repeat password:"
            placeHolder="Repeat password"
            register={register("repeatPassword")}
          />
          <button className={styles.sign_btn} type="submit">
            submit
          </button>
          <h4>
            Already have account? <Link to={"/login"}>login</Link>
          </h4>
        </div>
      </form>
    </div>
  );
};
export default SignUpPage;
