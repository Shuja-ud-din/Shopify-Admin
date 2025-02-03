import ProductCard from '@/components/ProductCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useGetProductGroup } from '@/hooks/product';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';

const ProductGroupDetails = () => {
  const { id } = useParams();

  const { productGroup, isLoading } = useGetProductGroup(id as string);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <Card className="col-span-2 lg:col-span-3 xl:col-span-4">
          <CardHeader>
            <CardTitle>Product Group Details</CardTitle>
            <CardDescription>View details of a product group</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="block">
                <Label>Name:</Label>
                <p className="text-gray-700 font-medium">
                  {productGroup?.name}
                </p>
              </div>

              <div className="block">
                <Label>Description:</Label>
                <p className="text-gray-700 font-medium">
                  {productGroup?.description}
                </p>
              </div>

              <div className="block">
                <Label>Tags:</Label>
                <div className="flex flex-wrap gap-3 mt-2">
                  {productGroup?.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 text-sm bg-[#104594] text-white rounded-full shadow-md hover:shadow-xl focus:outline-none"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl mt-4 mb-2 font-bold text-gray-800">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {productGroup?.products.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGroupDetails;
