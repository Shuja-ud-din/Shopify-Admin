import { IProduct } from '@/types/product';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="flex justify-between flex-col rounded-lg min-w-60 w-full bg-[#d2d2d2] shadow-lg cursor-pointer"
        onClick={() => navigate(`/dashboard/products/details/${product.id}`)}
      >
        <div className=" w-full flex items-center justify-center p-5  rounded-l-lg rounded-r-lg ">
          <img src={product.image} className="h-full rounded-t-lg" alt="" />
        </div>
        <div className=" w-full bg-white rounded-lg">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h3>

            <p className="text-sm text-gray-500">
              {product.inventoryQuantity} in stock
            </p>

            <div className="flex flex-wrap gap-3 mt-3">
              {product.tags.map((tag) => (
                <button className="px-4 py-2 text-sm bg-white border rounded-full shadow-md hover:shadow-xl focus:outline-none">
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Price: $ {product.price}</p>
              <Button>View Details</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
