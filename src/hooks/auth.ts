import { useMutation } from '@tanstack/react-query';
import { ILoginResponse } from '@/types/auth';
import { openToast } from '@/utils/toast';
import { setToken } from '@/utils/token';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '@/services/auth';
import { IAPIError } from '@/types/api';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSuccess = (data: ILoginResponse) => {
    setToken(data.token);
    queryClient.invalidateQueries({ queryKey: ['me'] });
    openToast('success', 'Login successful');
    navigate('/dashboard');
  };

  const onError = (error: IAPIError) => {
    openToast(
      'error',
      error?.response?.data?.message ||
        error?.response?.message ||
        error?.message ||
        'Something went wrong',
    );
  };

  const { mutateAsync, error, isError, isPending, isSuccess } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess,
    onError,
  });

  return {
    login: mutateAsync,
    error,
    isError,
    isLoading: isPending,
    isSuccess,
  };
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['me'] });
    openToast('success', 'Logout successful');
    navigate('/');
  };

  const onError = (error: IAPIError) => {
    openToast(
      'error',
      error?.response?.data?.message ||
        error?.response?.message ||
        error?.message ||
        'Something went wrong',
    );
  };

  const { mutateAsync, error, isError, isPending, isSuccess } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logout,
    onSuccess,
    onError,
  });

  return {
    logout: mutateAsync,
    error,
    isError,
    isLoading: isPending,
    isSuccess,
  };
};
