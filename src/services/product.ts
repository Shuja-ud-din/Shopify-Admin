import {
  TCreateProductGroup,
  TDeleteProductGroup,
  TGetAllProductGroups,
  TGetAllProducts,
  TGetAllTags,
  TGetProduct,
  TGetProductGroup,
  TUpdateProduct,
  TUpdateProductGroup,
} from '@/types/product';
import api from '@/utils/api';

export const getAllProducts: TGetAllProducts = async () => {
  const { data } = await api.get('/api/products');

  return data;
};

export const getProduct: TGetProduct = async (id) => {
  const { data } = await api.get(`/api/products/details/${id}`);

  return data;
};

export const getAllTags: TGetAllTags = async () => {
  const { data } = await api.get('/api/products/tags');

  return data;
};

export const updateProduct: TUpdateProduct = async (payload) => {
  const { data } = await api.patch(`/api/products/${payload.id}`, payload);

  return data;
};

export const getAllProductGroups: TGetAllProductGroups = async () => {
  const { data } = await api.get('/api/product-groups');

  return data;
};

export const getProductGroup: TGetProductGroup = async (id) => {
  const { data } = await api.get(`/api/product-groups/${id}`);

  return data;
};

export const createProductGroup: TCreateProductGroup = async (payload) => {
  const { data } = await api.post('/api/product-groups', payload);

  return data;
};

export const deleteProductGroup: TDeleteProductGroup = async (id) => {
  const { data } = await api.delete(`/api/product-groups/${id}`);

  return data;
};

export const updateProductGroup: TUpdateProductGroup = async ({
  id,
  payload,
}) => {
  const { data } = await api.put(`/api/product-groups/${id}`, payload);

  return data;
};
