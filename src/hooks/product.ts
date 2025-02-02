import {
  createProductGroup,
  getAllProductGroups,
  getAllProducts,
  getAllTags,
} from '@/services/product';
import { IAPIError } from '@/types/api';
import { openToast } from '@/utils/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useGetAllProducts = () => {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  return {
    products: data?.products,
    isLoading: isPending,
    isSuccess,
    isError,
    error,
  };
};

export const useGetAllTags = () => {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ['tags'],
    queryFn: getAllTags,
  });

  return {
    tags: data?.tags,
    isLoading: isPending,
    isSuccess,
    isError,
    error,
  };
};

export const useGetAllProductGroups = () => {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ['productGroups'],
    queryFn: getAllProductGroups,
  });

  return {
    productGroups: data?.productGroups,
    isLoading: isPending,
    isSuccess,
    isError,
    error,
  };
};

export const useCreateProductGroup = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['productGroups'] });
    openToast('success', 'Product group created successfully');
    navigate('/dashboard/products-groups');
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
    mutationKey: ['createProductGroup'],
    mutationFn: createProductGroup,
    onSuccess,
    onError,
  });

  return {
    createProductGroup: mutateAsync,
    error,
    isError,
    isLoading: isPending,
    isSuccess,
  };
};
