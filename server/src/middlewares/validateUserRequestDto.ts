import { Request, Response, NextFunction } from 'express';
import { UserRequestDto } from '../../src/modules/User/dto/userRequest.dto';
import { HttpStatusCode } from '../utils/statusCodes';
import { ErrorMessages } from '../utils/errorMessages';

export function validateUserRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body as unknown;
  if (!body || typeof body !== 'object') {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ error: ErrorMessages.INVALID_REQUEST_BODY_MUST_BE_AN_OBJECT });
  }
  const { userName, password } = body as Record<string, unknown>;
  if (typeof userName !== 'string' || typeof password !== 'string') {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      error: ErrorMessages.INVALID_REQUEST_USERNAME_AND_PASSWORD_MUST_BE_STRINGS,
    });
  }
  req.body = { userName, password } as UserRequestDto;
  next();
}
