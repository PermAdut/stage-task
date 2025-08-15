import axios from "axios";
import type {
  LoginCredentials,
  RegisterCredentials,
} from "../store/slices/userSlice";
class UserApiInstance {
  async handleRegistration(credentials: RegisterCredentials) {
    return await axios.post(
      `${process.env.API_SERVER_URL}/api/v1.0/user/register`,
      credentials,
      { withCredentials: true },
    );
  }

  async handleLogin(credentials: LoginCredentials) {
    return await axios.post(
      `${process.env.API_SERVER_URL}/api/v1.0/user/login`,
      credentials,
      { withCredentials: true },
    );
  }

  async refreshToken() {
    return await axios.post(
      `${process.env.API_SERVER_URL}/api/v1.0/user/refresh`,
      {},
      { withCredentials: true },
    );
  }
}

const userInstance = new UserApiInstance();
export default userInstance;
