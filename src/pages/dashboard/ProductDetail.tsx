import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGetProduct, useUpdateProductUrls } from '@/hooks/product';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

const ProductDetail = () => {
  const [urls, setUrls] = useState<string[]>([]);

  const { id } = useParams<{ id: string }>();

  const { product } = useGetProduct(id as string);
  const { updateProduct, isLoading } = useUpdateProductUrls();

  const handleUrlChange = (index: number, value: string) => {
    const updatedUrls = [...urls];
    updatedUrls[index] = value;
    setUrls(updatedUrls);
  };

  const addUrlField = () => {
    setUrls([...urls, '']);
  };

  const removeUrlField = (index: number) => {
    const updatedUrls = urls.filter((_, i) => i !== index);
    setUrls(updatedUrls);
  };

  const handleSubmit = async () => {
    await updateProduct({ id: id as string, urls });
  };

  useEffect(() => {
    if (product) {
      setUrls(product.scrapperUrls);
    }
  }, [product]);

  return (
    <div className="w-full h-full flex">
      <div className="w-[40%] border-r border-gray-300 flex    flex-col items-center  pt-[5rem]">
        <div className="w-[90%] h-[25rem]  rounded-xl shadow-lg">
          <img
            src={product?.image}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex w-[90%] flex-col mt-[2rem]  gap-2 px-4 py-2 border rounded-md shadow-sm bg-gray-50">
          <p className="text-gray-700 font-medium flex justify-between">
            <span>Type: </span>
            <span className="font-semibold">{product?.productType}</span>
          </p>
          <p className="text-gray-700 font-medium flex justify-between">
            <span>Vendor:</span>{' '}
            <span className="font-semibold">{product?.vendor}</span>
          </p>

          <p className="text-gray-700 font-medium flex justify-between">
            <span>Inventory Quantity:</span>{' '}
            <span className="font-semibold">{product?.inventoryQuantity}</span>
          </p>

          <p className="text-gray-700 font-medium flex justify-between">
            <span>Sku:</span>{' '}
            <span className="font-semibold">{product?.sku}</span>
          </p>

          <p className="text-gray-700 font-medium flex justify-between">
            <span>Shopify Product Id:</span>{' '}
            <span className="font-semibold">{product?.shopifyProductId}</span>
          </p>
        </div>

        <div className="mb-6 w-[90%]">
          <div className="w-full h-[1px] mt-12 mb-4 bg-slate-300"></div>
          <div className="space-y-2">
            <p className="text-lg text-gray-700 font-medium">
              <span className="font-semibold">Created At:</span>{' '}
              {dayjs(product?.createdAt).format('DD MMM, YYYY')}
            </p>
            <p className="text-lg text-gray-700 font-medium">
              <span className="font-semibold">Updated At:</span>{' '}
              {dayjs(product?.updatedAt).format('DD MMM, YYYY')}
            </p>
          </div>
          <div className="w-full h-[1px] mt-4 bg-slate-300"></div>
        </div>
      </div>

      <div className="w-[60%] flex flex-col  px-10 pt-[5rem] justify-between">
        <div>
          <div className="w-full flex items-center justify-between">
            <h1 className="text-[2.5rem] font-bold ">{product?.title}</h1>
            <div className="flex items-center">
              <div className="flex justify-end">
                {product?.status === 'active' && (
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                    Active
                  </button>
                )}
                {product?.status === 'draft' && (
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">
                    Draft
                  </button>
                )}
                {product?.status === 'archived' && (
                  <button className="bg-gray-500 text-white px-4 py-2 rounded-full">
                    Archived
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* render html string as ui */}
          <div
            className="mt-4 text-gray-800"
            dangerouslySetInnerHTML={{ __html: product?.bodyHtml || '' }}
          />

          <h1 className="text-[3.5rem] font-semibold  mt-[2rem] ">{`$ ${product?.price}`}</h1>
          <div className="mb-6 mt-[1rem]">
            <p className="text-lg  text-gray-800 font-semibold mb-3">Tags</p>
            <div className="flex flex-wrap gap-3">
              {product?.tags.map((tag, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm bg-[#104594] text-white rounded-full shadow-md hover:shadow-xl focus:outline-none"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <p className="text-lg  text-gray-800 font-semibold mb-3">
            Scrapper URLs
          </p>

          <div className="space-y-2">
            {urls.map((url, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  type="text"
                  value={url}
                  onChange={(e) => handleUrlChange(index, e.target.value)}
                  placeholder="Enter URL"
                />
                <button
                  onClick={() => removeUrlField(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <Button className="mt-[0.5rem] bg-slate-700" onClick={addUrlField}>
            + Add URL
          </Button>

          <Button
            onClick={handleSubmit}
            isLoading={isLoading}
            className="mt-2 w-full bg-primary text-white flex items-center justify-center gap-2"
          >
            Update Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
