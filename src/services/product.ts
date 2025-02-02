import { TGetAllProducts } from '@/types/product';
import api from '@/utils/api';

export const getAllProducts: TGetAllProducts = async () => {
  const { data } = await api.get('/api/products');

  return data;
};
