import styles from "./LoginInput.module.css";
type LoginInputProps = {
  title: string;
  placeHolder: string;
  setInfo: (info: string) => void;
};
const LoginInput = (props: LoginInputProps) => {
  return (
    <>
      <label className={styles.login_label}>{props.title}</label>
      <input
        type={props.placeHolder.toLocaleLowerCase().includes("password") ? "password" : "text"}
        className={styles.login_input}
        placeholder={props.placeHolder}
        onChange={(event) => {
          props.setInfo(event.target.value);
        }}
      />
    </>
  );
};
export default LoginInput;
