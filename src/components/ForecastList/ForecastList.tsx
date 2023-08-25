import React, { useContext } from "react";

import { Grid } from "@mui/material";

import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";
import { Day } from "../../models/day";
import { DayForecastCard } from "../DayForecastCard";

const ForecastList: React.FC = () => {
  const { forecast } = useContext(WeatherContext) as WeatherContextType;

  return (
    <Grid container spacing={2} flexWrap="wrap" justifyContent="space-around">
      {forecast?.daily.map((day: Day, index) => {
        if (index > 4) return;
        return (
          <Grid item sx={{ width: "182px" }}>
            <DayForecastCard
              icon={day.weather[0].icon}
              date={day.dt}
              index={index}
              maxTemp={day.temp.max}
              minTemp={day.temp.min}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ForecastList;
