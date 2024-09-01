import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCorousalCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${3}`)} className="flex flex-col justify-center items-center w-[16rem] rounded-xl shadow-lg mx-2 cursor-pointer bg-white overflow-hidden ">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={item.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{item.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{item.title}</p>
      </div>
    </div>
  );
};

export default ProductCorousalCard;
