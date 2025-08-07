import { User } from './user';
import { getUsers } from '../../utils/database';
import { AppError } from '../../middlewares/handleError';
import { UserResponseDto } from './dto/userResponse.dto';
import { HttpStatusCode } from '../../utils/statusCodes';
import { ErrorMessages } from '../../utils/errorMessages';
export async function authUser(user: User): Promise<UserResponseDto> {
  try {
    const users = getUsers();
    const findUser = users.find((el) => el.userName === user.userName);
    if (!findUser) throw new AppError(HttpStatusCode.NOT_FOUND, ErrorMessages.INVALID_USERNAME);
    if (findUser.password != user.password)
      throw new AppError(HttpStatusCode.BAD_REQUEST, ErrorMessages.INVALID_PASSWORD);
    return {
      userName: findUser.userName,
    };
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(
        err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
        err.message || ErrorMessages.INTERNAL_SERVER_ERROR
      );
    } else throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR);
  }
}
