import { Alert, AlertTitle, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderTracker from "../../components/orderTracker/OrderTracker";
import AddressCard from "../../components/addressPageComponents/AddressCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus } from "../../redux/paymentRedux/action";
import { getOrderById } from "../../redux/orderRedux/action";

const PaymentSuccessPage = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [status, setStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    setPaymentId(url.get("razorpay_payment_id"));
    setReferenceId(url.get("razorpay_payment_link_reference_id"));
    setStatus(url.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const reqdata = { orderId, paymentId };
      dispatch(updateOrderStatus(reqdata));
      dispatch(getOrderById(orderId));
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center mt-10">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations Your Order Get Placed
        </Alert>
      </div>

      <OrderTracker itemStatus={1} />

      {/* order item mapping */}
      {order.order?.orderItems?.map((item) => (
        <Grid container className="space-y-5 py-5 pt-20">
          <Grid container item className="shadow-xl rounded-md p-5">
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  src={item.product.imageUrl}
                  alt=""
                  className="h-[5rem] w-[5rem] object-cover object-top"
                />

                <div
                  className="
                        ml-5 space-y-2"
                >
                  <p>{item.product.title}</p>
                  <div className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div>
                  <p>Seller : {item.product.brand}</p>
                  <p>₹ {item.price}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AddressCard address={order.order?.address} buttonVisibility={false}/>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default PaymentSuccessPage;
