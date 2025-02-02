import { getAllProducts, getProduct, updateProduct } from '@/services/product';
import { IAPIError } from '@/types/api';
import { IGetProductResponse } from '@/types/product';
import { openToast } from '@/utils/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetAllProducts = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
  return { products: data?.products, isLoading, isSuccess, isError };
};

export const useGetProduct = (id: string) => {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });

  return {
    product: data?.product,
    isLoading: isPending,
    isSuccess,
    isError,
    error,
  };
};

export const useUpdateProductUrls = () => {
  const queryClient = useQueryClient();

  const onSuccess = (data: IGetProductResponse) => {
    queryClient.invalidateQueries({
      queryKey: ['product', data.product.shopifyProductId],
    });
    openToast('success', 'Product updated successfully');
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
    mutationKey: ['updateProduct'],
    mutationFn: updateProduct,
    onSuccess,
    onError,
  });

  return {
    updateProduct: mutateAsync,
    error,
    isError,
    isLoading: isPending,
    isSuccess,
  };
};
