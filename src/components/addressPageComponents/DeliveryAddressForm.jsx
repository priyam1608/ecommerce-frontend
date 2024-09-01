import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../redux/orderRedux/action";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipcode, setZipcode] = useState();
  const [mobile, setMobile] = useState();

  const onAddressClick = (address) => {
    setFirstName(address.firstName);
    setLastName(address.lastName);
    setStreetAddress(address.streetAddress);
    setCity(address.city);
    setState(address.state);
    setZipcode(address.zipcode);
    setMobile(address.mobile);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipcode: data.get("pincode"),
      mobile: data.get("phoneNumber"),
    };

    const orderData = { address, navigate };
    // Check if address already exists
    const existingAddress = auth.user.addresses.find((addr) => {
      return (
        addr.firstName === address.firstName &&
        addr.lastName === address.lastName &&
        addr.streetAddress === address.streetAddress &&
        addr.city === address.city &&
        addr.state === address.state &&
        addr.zipcode === address.zipcode &&
        addr.mobile === address.mobile
      );
    });

    if (existingAddress) {
      // If address already exists, use the existing one
      const orderData = { address: existingAddress, navigate };
      dispatch(createOrder(orderData));
    } else {
      // If address does not exist, send the new one to the backend
      const orderData = { address, navigate };
      dispatch(createOrder(orderData));
    }
  };
  return (
    <div>
      <Grid container spacing={2} className="border rounded-md p-4 h-[30.5rem]">
        <Grid
          item
          xs={12}
          lg={5}
          alignItems="center"
          className="space-y-2 overflow-y-scroll w-full h-[500px]"
        >
          {auth.user?.addresses.length > 0 &&
            auth.user?.addresses?.map((address) => (
              <AddressCard
                address={address}
                onAddressClick={onAddressClick}
                buttonVisibility={true}
              />
            ))}
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-lg shadow-lg">
            <form onSubmit={handleFormSubmission}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="Given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="Given-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="address"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="Pincode/Postal Code"
                    fullWidth
                    autoComplete="pincode"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="Phone Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    className="w-full"
                    sx={{
                      marginTop: 1,
                      paddingX: "1.5rem",
                      paddingY: "0.5rem",
                      bgcolor: "#9155fd",
                    }}
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
