import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
const RestaurentList = ({ index, name, image, area }) => {
  const url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="grid grid-cols-12 items-center px-4 py-3 border border-[#e4e7ec] hover:border hover:border-[#ff510086] transition my-2 rounded-md">
      
      
      <div className="col-span-1 text-gray-500 text-sm pl-2">
        {index + 1}
      </div>

      
      <div className="col-span-2">
        <img
          src={`${url}${image}`}
          alt={name}
          className="w-12 h-12 rounded-lg object-cover shadow-sm"
        />
      </div>

     
      <div className="col-span-4 font-medium text-gray-800">
        {name}
      </div>

      
      <div className="col-span-3 text-gray-600 text-sm">
        {area}
      </div>

      
      <div className="col-span-2 flex gap-3 justify-end">
        
        <button className="p-2 rounded hover:bg-blue-100">
          <BiEdit size={18} />
        </button>

        <button className="p-2 rounded hover:bg-green-100 ">
          <AiOutlineEye size={18} />
        </button>

        <button className="p-2 rounded hover:bg-red-100 ">
          <AiOutlineDelete size={18} />
        </button>

      </div>
    </div>
  );
};

export default RestaurentList;