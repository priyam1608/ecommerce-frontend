import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/account/orders/${3}`)} className="shadow-lg rounded-lg p-7 mx-7 mt-3">
      <Grid container spacing={2}>
        <Grid item xs={6} className="flex space-x-3">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70"
            alt=""
            className="h-[5rem] w-[5rem] object-cover object-top"
          />
          <div>
            <p className="font-semibold">
              Men Slim Mid Rise Jack Jeans
            </p>
            <p className="opacity-70">Size: M</p>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p className="font-semibold text-lg">₹1999</p>
        </Grid>
        <Grid item xs={4}>
          <div className="flex space-x-1">
            <AdjustIcon color="success" />
            {true && (
              <div>
                <div>
                  <p className="text-lg">Delivered On March 03</p>
                </div>
                <div>
                  <p className="text-sm">Your Item has been delivered</p>
                </div>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
