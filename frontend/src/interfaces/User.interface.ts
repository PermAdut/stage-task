export type User = {
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  password: string;
};

export type UserLoginCredentials = Pick<User, "username" | "password">;

export type UserRegisterCredentials = User & { repeatPassword: string };
