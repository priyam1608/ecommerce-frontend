import React, { useEffect } from 'react'
import AddressCard from './AddressCard'
import CartPage from '../../pages/cartPage/CartPage'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getOrderById } from '../../redux/orderRedux/action'
import OrderCard from '../cartPageComponents/OrderCard'
import { Button } from '@mui/material'
import { createPayment } from '../../redux/paymentRedux/action'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const navigate = useNavigate();

  const {order} = useSelector(store => store)

  useEffect(()=>{
    dispatch(getOrderById(orderId));
  },[orderId])


const handleCheckout = () => {
  dispatch(createPayment(orderId));
};

  return (
    <div>
        <AddressCard address = {order.order?.address} buttonVisibility={false}/>
    <div className="lg:grid grid-cols-3 lg:px-16 relative pt-5">
      <div className="col-span-2">
        {order.order?.orderItems?.map((item) => (
          <OrderCard item= {item} />
        ))}
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border p-5">
          <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
          <hr />
          <div className="space-y-3 font-semibold mb-3 mt-2">
            <div className="flex justify-between">
              <p className="font-semibold">Price</p>
              <p className="font-semibold">₹{order.order?.totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p className="text-green-600">-₹{order.order?.discount}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Charges</p>
              <p className="text-green-600">Free</p>
            </div>
            <div className="flex justify-between">
              <p>Total Amount</p>
              <p className="text-green-600">₹{order.order?.totalDiscountedPrice}</p>
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
    </div>
  )
}

export default OrderSummary