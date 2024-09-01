import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "../../components/MyOrdersComponent/OrderCard";

const MyOrdersPage = () => {
  const filterData = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];
  return (
    <div>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="space-y-2 rounded-lg shadow-lg h-auto sticky top-5 bg-white p-7 m-5">
            <h1 className="font-semibold text-xl">Filters</h1>
            <hr />
            <div className="space-y-5">
              <h1 className="font-bold text-xl">Order Status</h1>
              <div>
                {filterData.map((option) => (
                  <div className="flex items-center space-x-3 space-y-1">
                    <input
                      type="checkbox"
                      name={option.value}
                      className="h-4 w-4 text-indigo-600 hover:ring-indigo-700 border-gray-500"
                    />
                    <label htmlFor={option.value} className="text-md">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={9.5} className="space-y-4">
          {[1, 1, 1, 1, 1].map((item) => (
            <OrderCard />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default MyOrdersPage;
