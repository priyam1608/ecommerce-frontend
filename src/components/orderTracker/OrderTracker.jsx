import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react'

const OrderTracker = ({ itemStatus }) => {
    const label = [
        "Order Placed",
        "Order Confirmed",
        "Order Shipped",
        "Out for Delivery",
        "Delivered",
      ];
  return (
    <div className="w-full">
          <Stepper activeStep={itemStatus} alternativeLabel>
            {label.map((status) => (
              <Step>
                <StepLabel sx={{ color: "#c808ff", fontSize: "44px" }}>
                  {status}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
  )
}

export default OrderTracker