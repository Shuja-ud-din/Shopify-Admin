import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { useGetAllProductGroups } from '@/hooks/product';
import Table from '@/components/ui/Table/Table';
import { Button } from '@/components/ui/button';
import { EditIcon, Plus, TrashIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductGroups: React.FC = () => {
  const navigate = useNavigate();
  const { productGroups } = useGetAllProductGroups();

  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        <Card className="col-span-2 lg:col-span-3 xl:col-span-4">
          <CardHeader>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <CardTitle>Product Groups</CardTitle>
                <CardDescription>
                  Product Groups are used to categorize products and apply
                  scrappers to them.
                </CardDescription>
              </div>
              <Button onClick={() => navigate('add')}>
                <Plus className="h-5 w-5" />
                <span className="hidden sm:block">Add Product Group</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table
              label={['Name', 'Description', 'Products', 'Actions']}
              keysToDisplay={['name', 'description', 'products']}
              array={productGroups || []}
              customBlocks={[
                {
                  index: 2,
                  component: (products) => {
                    return <span>{products.length}</span>;
                  },
                },
              ]}
              extraColumns={[
                () => (
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      className=" rounded-full"
                      size="icon"
                    >
                      <EditIcon className="h-5 w-5" />
                    </Button>
                    <Button
                      className=" rounded-full"
                      variant="ghost"
                      size="icon"
                    >
                      <TrashIcon color="red" className="h-5 w-5" />
                    </Button>
                  </div>
                ),
              ]}
              key="id"
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ProductGroups;
