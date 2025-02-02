import { ShopifyProductStatus } from "@/enum/product";
import { IAPIResponse } from "./api";

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

  export interface IGetAllProductsResponse extends IAPIResponse{
    products : IProduct[]

  }
  export type TGetAllProducts = () => Promise<IGetAllProductsResponse>