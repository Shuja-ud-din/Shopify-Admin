import { getAllProducts } from '@/services/product';
import { useQuery } from '@tanstack/react-query';

export const useGetAllProducts = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
  return { products: data?.products, isLoading, isSuccess, isError };
};
