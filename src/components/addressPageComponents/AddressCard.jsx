import { Button } from "@mui/material";
import React from "react";

const AddressCard = ({address, onAddressClick, buttonVisibility}) => {

  const handleAddressClick = ()=>{
    onAddressClick(address);
  }
  return (
    <div className="border rounded-lg shadow-lg p-4 mr-4">
      <div>
        <p className="font-semibold">{address?.firstName+" "+address?.lastName}</p>
        <p>{address?.streetAddress+" , "+address?.city}</p>
        <p>{address?.state+" - "+address?.zipcode}</p>
      </div>
      <div>
        <p className="font-semibold">Phone Number</p>
        <p>{address?.mobile}</p>
      </div>

      {buttonVisibility && <Button
        onClick={handleAddressClick}
        type="submit"
        variant="contained"
        sx={{
          marginTop: 1,
          paddingX: "1.5rem",
          paddingY: "0.5rem",
          bgcolor: "#9155fd",
        }}
      >
        Deliver Here
      </Button>}
    </div>
  );
};

export default AddressCard;
