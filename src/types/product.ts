import { ShopifyProductStatus } from '@/enum/product';
import { IAPIResponse } from './api';

export interface IProduct {
  id: string;
  shopifyProductId: number;
  title: string;
  bodyHtml: string;
  vendor: string;
  productType: string;
  tags: string[];
  status: ShopifyProductStatus;
  image: string;
  sku: string;
  price: number;
  inventoryQuantity: number;

  scrapperUrls: string[];

  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateProductRequest {
  id: string;
  urls: string[];
}

export interface IProductGroup {
  id: string;
  name: string;
  description: string;
  tags: string[];
  products: IProduct[];
}

export interface ITag {
  id: string;
  name: string;
}

export interface ICreateProductGroupPayload {
  name: string;
  description: string;
  tags: string[];
}

export interface IUpdateProductGroupPayload {
  id: string;
  payload: ICreateProductGroupPayload;
}

export interface IGetAllProductGroupsResponse extends IAPIResponse {
  productGroups: IProductGroup[];
}

export interface IGetAllTags extends IAPIResponse {
  tags: ITag[];
}

export interface IGetAllProductsResponse extends IAPIResponse {
  products: IProduct[];
}

export interface IGetProductGroupResponse extends IAPIResponse {
  productGroup: IProductGroup;
}

export interface IGetProductResponse extends IAPIResponse {
  product: IProduct;
}

export type TGetAllProducts = () => Promise<IGetAllProductsResponse>;
export type TGetProduct = (id: string) => Promise<IGetProductResponse>;
export type TUpdateProduct = (
  payload: IUpdateProductRequest,
) => Promise<IGetProductResponse>;
export type TGetAllTags = () => Promise<IGetAllTags>;
export type TGetAllProductGroups = () => Promise<IGetAllProductGroupsResponse>;
export type TGetProductGroup = (
  id: string,
) => Promise<IGetProductGroupResponse>;
export type TCreateProductGroup = (
  payload: ICreateProductGroupPayload,
) => Promise<IAPIResponse>;
export type TDeleteProductGroup = (id: string) => Promise<IAPIResponse>;
export type TUpdateProductGroup = (
  payload: IUpdateProductGroupPayload,
) => Promise<IAPIResponse>;
