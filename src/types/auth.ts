import { IAPIResponse } from './api';

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse extends IAPIResponse {
  token: string;
}

export type TLogin = (payload: ILoginPayload) => Promise<ILoginResponse>;
export type TLogout = () => Promise<boolean>;
