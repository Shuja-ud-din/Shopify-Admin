import {
  TCreateProductGroup,
  TGetAllProductGroups,
  TGetAllProducts,
  TGetAllTags,
} from '@/types/product';
import api from '@/utils/api';

export const getAllProducts: TGetAllProducts = async () => {
  const { data } = await api.get('/api/products');

  return data;
};

export const getAllTags: TGetAllTags = async () => {
  const { data } = await api.get('/api/products/tags');

  return data;
};

export const getAllProductGroups: TGetAllProductGroups = async () => {
  const { data } = await api.get('/api/product-groups');

  return data;
};

export const createProductGroup: TCreateProductGroup = async (payload) => {
  const { data } = await api.post('/api/product-groups', payload);

  return data;
};
