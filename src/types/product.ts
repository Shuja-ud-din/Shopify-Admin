import { ShopifyProductStatus } from '@/enum/product';
import { IAPIResponse } from './api';

export interface IProduct {
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

export interface IGetAllProductsResponse extends IAPIResponse {
  products: IProduct[];
}

export interface IGetProductResponse extends IAPIResponse {
  product: IProduct;
}

export type TGetAllProducts = () => Promise<IGetAllProductsResponse>;
export type TGetProduct = (id: string) => Promise<IGetProductResponse>;
export type TUpdateProduct = (
  payload: IUpdateProductRequest,
) => Promise<IGetProductResponse>;
