import React from "react";
import { Box, Typography } from "@mui/material";

import { theme } from "../../theme/theme";
import { formatDate } from "../../helper/formatDate";
import { WeatherImage } from "../WeatherImage";
import { useContext } from "react";
import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";
import { celsiusToFarenheit } from "../../helper/celsiusToFarenheit";

export type DayForecastCardProps = {
  index: number;
  date: number;
  icon: string;
  maxTemp: number;
  minTemp: number;
  weather: string;
};

const DayForecastCard: React.FC<DayForecastCardProps> = ({
  index,
  date,
  maxTemp,
  minTemp,
  weather,
}) => {
  const { isFarenheit } = useContext(WeatherContext) as WeatherContextType;
  const dayDate = index === 0 ? "Tomorrow" : formatDate(date);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        padding: "24px 18px",
        textAlign: "center",
        height: { md: "177px", xs: "230px" },
        width: { md: "120px", xs: "100%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          color: theme.palette.grayLight.main,
          fontSize: { md: "12px", sm: "16px" },
        }}
      >
        {dayDate}
      </Typography>
      <Box textAlign="center">
        <WeatherImage image={weather} width="60px" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ color: theme.palette.grayLight.main }}>
          {isFarenheit
            ? celsiusToFarenheit(maxTemp.toString())
            : Math.round(maxTemp)}
          {isFarenheit ? "ºF" : "ºC"}
        </Typography>
        <Typography sx={{ color: theme.palette.gray.main }}>
          {isFarenheit
            ? celsiusToFarenheit(maxTemp.toString())
            : Math.round(minTemp)}
          {isFarenheit ? "ºF" : "ºC"}
        </Typography>
      </Box>
    </Box>
  );
};

export default DayForecastCard;
