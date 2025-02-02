import { Button } from "@/components/ui/button";
import  { useState } from "react";
import { FaShoppingCart,FaTrash } from "react-icons/fa";
const ProductDetail = () => {
    const [urls, setUrls] = useState<string[]>(["https://example.com"]);
    const [status, setStatus] = useState('inactive');
    const tags = ['E-Bay', 'Wallmart', 'Amazon', 'Ali Baba'];


    const handleUrlChange = (index: number, value: string) => {
      const updatedUrls = [...urls];
      updatedUrls[index] = value;
      setUrls(updatedUrls);
    };
  
    const addUrlField = () => {
      setUrls([...urls, ""]);
    };

  return (
    <div className="w-full h-full flex">
      <div className="w-[40%] border-r border-gray-300 flex    flex-col items-center  pt-[5rem]">
        <div className="w-[90%] h-[25rem]  rounded-xl shadow-lg">
        <img
          src="https://cdn.shopify.com/s/files/1/0740/0459/4903/files/product_image.jpg?v=1738263105" // Replace with actual image URL
          alt="Product"
          className="w-full h-full object-contain"
        />
        </div>
        <div className="flex mt-[2rem] items-center gap-2 px-4 py-2 border rounded-md shadow-sm bg-gray-50">
            <FaShoppingCart size={20} color="gray" />
            <p className="text-gray-700 font-medium">Type: <span className="font-semibold">Clothing</span></p>
            <p className="text-gray-700 font-medium">Vendor: <span className="font-semibold">Ebay</span></p>
         </div>
        </div>

        <div className="w-[60%] flex flex-col  px-10 pt-[5rem] justify-between">

         <div>
            <div className="w-full flex items-center justify-between">
                <h1 className="text-[2.5rem] font-bold ">Short Sleeve Shirt - S</h1>
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${status === 'active' ? 'bg-green-400' : 'bg-red-500'} transition-colors duration-300`}
                  ></div>
                </div>
            </div>
           <p className="text-[1rem] mt-[0.5rem]">
             This is a detailed description of the product. It explains the
             features, benefits, and any additional information the user might
             need.
           </p>
           <h1 className="text-[3.5rem] font-semibold  mt-[2rem] ">{`$ 25`}</h1>
           <div className="mb-6 mt-[1rem]">
             <p className="text-lg  text-gray-800 font-semibold mb-3">Tags</p>
             <div className="flex flex-wrap gap-3">
               {tags.map((tag, index) => (
                 <button
                   key={index}
                   className="px-4 py-2 text-sm bg-primary text-white rounded-full shadow-md hover:shadow-xl focus:outline-none"
                 >
                   {tag}
                 </button>
               ))}
             </div>
           </div>

           <h2 className="text-lg font-medium mb-2 mt-[5rem]">Scrapper URLs</h2>

           <div className="space-y-2">
               {urls.map((url, index) => (
                 <div key={index} className="flex items-center space-x-2">
                   <input
                     type="text"
                     value={url}
                     onChange={(e) => handleUrlChange(index, e.target.value)}
                     placeholder="Enter URL"
                     className="w-full px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-blue-400"
                   />
                   <button
                     className="text-red-500 hover:text-red-700 focus:outline-none"
                   >
                     <FaTrash />
                   </button>
                 </div>
               ))}
             </div>
               <Button
               className="mt-[0.5rem]"
               onClick={addUrlField}
               >
               + Add URL
               </Button>
         </div>

         <div className="mb-6">
             <div className="w-full h-[1px] mt-12 mb-4 bg-slate-300"></div>
             <div className="space-y-2">
               <p className="text-lg text-gray-700 font-medium">
                 <span className="font-semibold">Created At:</span> 21 Jan, 2025
               </p>
               <p className="text-lg text-gray-700 font-medium">
                 <span className="font-semibold">Updated At:</span> 21 Jan, 2025
               </p>
             </div>
            <div className="w-full h-[1px] mt-4 bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
