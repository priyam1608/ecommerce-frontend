import { Box, Grid, LinearProgress, Rating } from "@mui/material";
import React from "react";
import ReviewCard from "./ReviewCard";

const RatingsAndReviewCard = () => {
  return (
    <section>
      <h1 className="font-semibold text-2xl pb-4 pl-5">Recent Reviews & Ratings</h1>
      <div className="border p-5">
        <Grid container spacing={7}>
          <Grid item xs={7}>
            <ReviewCard />
          </Grid>
          <Grid item xs={5}>
            <h3 className="text-xl font-semibold">Product Ratings</h3>
            <div className="flex items-center space-x-5">
              <Rating readOnly value={4.5} precision={0.5} />
              <p className="opacity-60 text-gray-700">42807 Ratings</p>
            </div>
            <div className="mt-6 space-y-2">
              <Box alignItems="center" className="flex space-x-1">
                <Grid item xs={2}>
                  <p>Excellent</p>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress
                    value={60}
                    variant="determinate"
                    color="success"
                    sx={{
                      bgcolor: "#d0d0d0",
                      height: 7,
                      borderRadius: 10,
                    }}
                  />
                </Grid>
              </Box>
              <Box alignItems="center" className="flex space-x-1">
                <Grid item xs={2}>
                  <p>Very Good</p>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress
                    value={50}
                    variant="determinate"
                    color="success"
                    sx={{
                      bgcolor: "d0d0d0",
                      height: 7,
                      borderRadius: 10,
                    }}
                  />
                </Grid>
              </Box>
              <Box alignItems="center" className="flex space-x-1">
                <Grid item xs={2}>
                  <p>Good</p>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress
                    value={40}
                    variant="determinate"
                    color="warning"
                    sx={{
                      bgcolor: "d0d0d0",
                      height: 7,
                      borderRadius: 10,
                    }}
                  />
                </Grid>
              </Box>
              <Box alignItems="center" className="flex space-x-1">
                <Grid item xs={2}>
                  <p>Average</p>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress
                    value={25}
                    variant="determinate"
                    color="error"
                    sx={{
                      bgcolor: "d0d0d0",
                      height: 7,
                      borderRadius: 10,
                    }}
                  />
                </Grid>
              </Box>
              <Box alignItems="center" className="flex space-x-1">
                <Grid item xs={2}>
                  <p>Poor</p>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress
                    value={15}
                    variant="determinate"
                    color="inherit"
                    sx={{
                      bgcolor: "d0d0d0",
                      height: 7,
                      borderRadius: 10,
                    }}
                  />
                </Grid>
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default RatingsAndReviewCard;
