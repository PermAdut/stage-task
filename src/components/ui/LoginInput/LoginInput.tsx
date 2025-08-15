import styles from "./LoginInput.module.css";
import type { UseFormRegisterReturn } from "react-hook-form";

type LoginInputProps = {
  title: string;
  placeHolder: string;
  register: UseFormRegisterReturn;
};
const LoginInput = (props: LoginInputProps) => {
  return (
    <>
      <label className={styles.login_label}>{props.title}</label>
      <input
        type={
          props.placeHolder.toLocaleLowerCase().includes("password")
            ? "password"
            : "text"
        }
        className={styles.login_input}
        placeholder={props.placeHolder}
        {...props.register}
      />
    </>
  );
};
export default LoginInput;
