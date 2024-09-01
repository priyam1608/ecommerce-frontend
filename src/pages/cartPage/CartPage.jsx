import React, { useEffect } from "react";
import OrderCard from "../../components/cartPageComponents/OrderCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../redux/cartRedux/action";
import CartCard from "../../components/cartPageComponents/CartCard";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart} = useSelector(store => store);
  
  const handleCheckout = () => {
    navigate("/cart/checkout?step=2");
  };

  useEffect(()=>{
    dispatch(getUserCart());
  },[cart.updateCartItem,cart.deleteCartItem]);

  return (
    <div className="lg:grid grid-cols-3 lg:px-16 relative pt-5">
      <div className="col-span-2">
        {cart.cartItems && cart.cart?.cartItems.map((item) => (
          <CartCard item= {item} />
        ))}
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border p-5">
          <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
          <hr />
          <div className="space-y-3 font-semibold mb-3 mt-2">
            <div className="flex justify-between">
              <p className="font-semibold">Price</p>
              <p className="font-semibold">₹{cart.cart?.totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p className="text-green-600">-₹{cart.cart?.discount}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Charges</p>
              <p className="text-green-600">Free</p>
            </div>
            <div className="flex justify-between">
              <p>Total Amount</p>
              <p className="text-green-600">₹{cart.cart?.totalDiscountedPrice}</p>
            </div>
          </div>

          <Button
            onClick={handleCheckout}
            type="submit"
            variant="contained"
            className="w-full"
            sx={{
              marginTop: 3,
              paddingX: "2.5rem",
              paddingY: "0.7rem",
              bgcolor: "#9155fd",
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
