import React from "react";
import './productCard.css'
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${item.id}`)} className="productCard w-[15rem] m-3 flex flex-col justify-center transition-all cursor-pointer space-y-2">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={item.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <h3 className="font-bold opacity-60">{item.brand}</h3>
          <p>{item.title}</p>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="font-semibold">₹{item.discountedPrice}</p>
          <p className="line-through opacity-50">₹{item.price}</p>
          <p className="font-semibold text-green-600">{item.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
