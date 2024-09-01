import React from "react";
import AddressCard from "../../components/addressPageComponents/AddressCard";
import { Grid} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import OrderTracker from "../../components/orderTracker/OrderTracker";

const OrderDetailsPage = () => {
  
  return (
    <div className="p-10">
      <div>
        <AddressCard />
      </div>
      <div className="p-10">
        <OrderTracker itemStatus={3} />
      </div>
      <div className="space-y-5">
        {[1, 1, 1, 1, 1].map(() => (
          <div className="shadow-lg rounded-lg p-7 mx-7">
            <Grid container spacing={3}>
              <Grid item xs={8} className="flex space-x-3">
                <img
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
                  alt=""
                  className="h-[5rem] w-[5rem] object-cover object-top"
                />
                <div>
                  <p className="font-semibold">Men Slim Mid Rise Jack Jeans</p>
                  <p className="opacity-70">Size: M</p>
                </div>
              </Grid>
              <Grid item xs={2}>
                <p className="font-semibold text-lg">₹1999</p>
              </Grid>
              <Grid item xs={2}>
                <div className="flex space-x-1">
                  <StarOutlineIcon className="h-4" sx={{ color: "#2986cc" }} />
                  <p className="text-[#2986cc]">Rate & Review Product</p>
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
