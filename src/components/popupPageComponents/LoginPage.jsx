import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile, login } from "../../redux/authRedux/action";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((store) => store);

  const handleSubmit =(event) => {
    event.preventDefault();

    let user = new FormData(event.currentTarget);

    const userData = {
      email: user.get("email"),
      password: user.get("password"),
    };

    console.log(userData);
    dispatch(login(userData));
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt));
    }
  }, [jwt, auth.jwt]);

  return (
    <div>
      <div className="flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
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
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="flex justify-center items-center pt-2">
          <p>If you're Not Registered?</p>
          <Button
            onClick={() => navigate("/register")}
            size="small"
            className="ml-5"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
