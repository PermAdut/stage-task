import { NextFunction, Response, Request } from 'express';
import { authUser } from './user.service';
import { UserRequestDto } from './dto/userRequest.dto';
import { HttpStatusCode } from '../../utils/statusCodes';

export async function loginUser(
  req: Request<object, any, UserRequestDto, any>,
  res: Response,
  next: NextFunction
) {
  try {
    const userBody = await authUser(req.body);
    res.status(HttpStatusCode.OK).json(userBody);
  } catch (err) {
    next(err);
  }
}
