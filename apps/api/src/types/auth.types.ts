import { AuthErrorCode } from './auth-error-code.enum';

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type AuthError = {
  code: AuthErrorCode;
  message: string;
};
