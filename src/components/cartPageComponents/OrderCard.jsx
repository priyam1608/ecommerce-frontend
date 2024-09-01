import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../redux/cartRedux/action";

const OrderCard = ({item}) => {

  const dispatch = useDispatch();

  const handleUpdateCartItem = (num)=>{

  }

  const handleRemoveCartItem = ()=>{
    
  }

  return (
    <div className="w-full shadow-lg rounded-lg p-5 space-y-1">
      <div className="flex space-x-2 items-center">
        <div className="w-[5rem] lg:w-[9rem] h-[5rem] lg:h-[9rem]">
          <img
            src={item?.product?.imageUrl}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="space-y-1">
            <p className="font-semibold text-lg">
              {item?.product?.title}
            </p>
            <p className="opacity-70 text-md">Size:{item?.size},White</p>
            <p className="opacity-70 text-md">Seller: {item?.product?.brand}</p>
          </div>
          <div className="flex space-x-5 items-center text-lg">
            <p className="line-through opacity-50">₹{item?.product?.price}</p>
            <p className="font-semibold">₹{item?.product?.discountedPrice}</p>
            <p className="font-semibold text-green-600">{item?.product?.discountPercent}% off</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-1 items-center">
        <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
          <RemoveCircleOutlineIcon/>
        </IconButton>
        <span className="border rounded-md py-1 px-7">{item.quantity}</span>
        <IconButton onClick={()=>handleUpdateCartItem(1)}>
          <AddCircleOutlineIcon sx={{ color: "#9155fd" }} />
        </IconButton>
        <Button onClick={handleRemoveCartItem} sx={{ color: "#9155fd" }}>Remove</Button>
      </div>
    </div>
  );
};

export default OrderCard;
