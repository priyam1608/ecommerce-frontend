import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile, register } from "../../redux/authRedux/action";

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const jwt = localStorage.getItem('jwt');
    const auth = useSelector(store=>store)

    useEffect(()=>{
      if(jwt) {
        dispatch(getUserProfile(jwt));
      }
    },[jwt,auth.jwt])

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = new FormData(event.currentTarget);

    const userData = {
      firstName: user.get("firstName"),
      lastName: user.get("lastName"),
      email: user.get("email"),
      password: user.get("password"),
    };

    console.log(userData);
    dispatch(register(userData));
  };

  return (
    <div>
      <div className="flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                autoComplete="Given-name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                autoComplete="Given-name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                autoComplete="Given-name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                autoComplete="Given-name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                className="w-full"
                sx={{ bgcolor: "#9155FD", padding: ".8rem 0" }}
                size="large"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="flex justify-center items-center pt-2">
          <p>If you're Already Registered?</p>
          <Button onClick={()=>navigate("/login")} size="small" className="ml-5">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
