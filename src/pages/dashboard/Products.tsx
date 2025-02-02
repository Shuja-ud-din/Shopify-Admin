import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Table from '../../components/ui/Table/Table';
import { useGetAllProducts } from '@/hooks/product';
import { ShopifyProductStatus } from '@/enum/product';
import { dateFormatter } from '@/utils/dateFormatter';

const Products: React.FC = () => {
  const { products } = useGetAllProducts();

  return (
    <div>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          <Card>
            <CardHeader>
              <CardTitle>Total Orders</CardTitle>
              <CardDescription>
                All orders placed in the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Average Order Value</CardTitle>
              <CardDescription>
                The average value of all orders in the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$49.99</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate</CardTitle>
              <CardDescription>
                The percentage of visitors that placed an order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">3.2%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate</CardTitle>
              <CardDescription>
                The percentage of visitors that placed an order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">3.2%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card className="col-span-2 lg:col-span-3 xl:col-span-4">
            <CardHeader>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle>Products</CardTitle>
                  <CardDescription>
                    Products Fetched from your Shopify Store
                  </CardDescription>
                </div>
                <Button>Sync Products</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table
                array={products || []}
                label={[
                  'Name',
                  'Price',
                  'Vendor',
                  'Product Type',
                  'Updated At',
                  'Status',
                ]}
                keysToDisplay={[
                  'title',
                  'price',
                  'vendor',
                  'productType',
                  'updatedAt',
                  'status',
                ]}
                customBlocks={[
                  {
                    index: 1,
                    component: (price: string) => <div>{`$${price}`}</div>,
                  },
                  {
                    index: 4,
                    component: (date: string) => (
                      <div>{dateFormatter(date)}</div>
                    ),
                  },
                  {
                    index: 5,
                    component: (status: ShopifyProductStatus) => (
                      <div className="flex justify-end">
                        {status === 'active' && (
                          <button className="bg-green-500 text-white px-4 py-2 rounded-xl">
                            Active
                          </button>
                        )}
                        {status === 'draft' && (
                          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                            Draft
                          </button>
                        )}
                        {status === 'archived' && (
                          <button className="bg-gray-500 text-white px-4 py-2 rounded">
                            Archived
                          </button>
                        )}
                      </div>
                    ),
                  },
                ]}
                routes={['details']}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Products;
