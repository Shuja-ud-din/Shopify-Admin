import { TLogin, TLogout } from '@/types/auth';
import api from '@/utils/api';

export const login: TLogin = async (payload) => {
  const { data } = await api.post('/auth/sign-in', payload);

  return data;
};

export const logout: TLogout = async () => {
  localStorage.clear();
  return true;
};
