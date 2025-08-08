import { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import LoginInput from "../../components/ui/LoginInput/LoginInput";
import { Link, useNavigate } from "react-router";
import axios, { AxiosError } from "axios";
import type { UserRegisterCredentials } from "../../interfaces/User.interface";
import { useAppSelector } from "../../hooks/redux";

const SignUpPage = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.user.isAuthenticated)
  const [errors, setErrors] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatedPassword] = useState<string>("");
  const [age, setAge] = useState<string>("");
  async function handleRegister() {
    try {
      const body: UserRegisterCredentials = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        repeatPassword: repeatPassword,
        age: parseInt(age),
      };
      await axios.post(
        `${process.env.API_SERVER_URL}/api/v1.0/user/register`,
        body,
      );
      navigate("/login");
    } catch (err) {
      if (err instanceof AxiosError) {
        setErrors(err.response?.data.error);
      } else setErrors("Unknown error");
    }
  }
  useEffect(() => {
    if(isAuth){
      navigate('/')
    }
  }, [navigate, isAuth])
  return (
    <div className={styles.sign_content}>
      <div className={styles.sign_wrapper}>
        <h1 className={styles.sign_title}>SignUp</h1>
        {errors && <h3 className={styles.sign_errors}>{errors}</h3>}
        <LoginInput
          title="Username:"
          placeHolder="Username"
          setInfo={setUsername}
        />
        <LoginInput
          title="First name:"
          placeHolder="First name"
          setInfo={setFirstName}
        />
        <LoginInput
          title="Last name:"
          placeHolder="Last name"
          setInfo={setLastName}
        />
        <LoginInput title="Age:" placeHolder="Age" setInfo={setAge} />
        <LoginInput
          title="Password:"
          placeHolder="Password"
          setInfo={setPassword}
        />
        <LoginInput
          title="Repeat password:"
          placeHolder="Repeat password"
          setInfo={setRepeatedPassword}
        />
        <button className={styles.sign_btn} onClick={handleRegister}>
          submit
        </button>
        <h4>Already have account? <Link to={'/login'}>login</Link></h4>
      </div>
    </div>
  );
};
export default SignUpPage;
