import React from "react";
import { Box, Typography } from "@mui/material";

import { theme } from "../../theme/theme";
import { formatDate } from "../../helper/formatDate";
import { WeatherImage } from "../WeatherImage";

export type DayForecastCardProps = {
  index: number;
  date: number;
  icon: string;
  maxTemp: number;
  minTemp: number;
  weather: string
};

const DayForecastCard: React.FC<DayForecastCardProps> = ({
  index,
  date,
  maxTemp,
  minTemp,
  weather
}) => {
  const dayDate = index === 0 ? "Tomorrow" : formatDate(date);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        padding: "24px 18px",
        textAlign: "center",
        height: "230px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Typography sx={{ color: theme.palette.grayLight.main }}>
        {dayDate}
      </Typography>
      <Box textAlign="center">
        <WeatherImage image={weather} width="90px" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ color: theme.palette.grayLight.main }}>
          {maxTemp}ºC
        </Typography>
        <Typography sx={{ color: theme.palette.gray.main }}>
          {minTemp}ºC
        </Typography>
      </Box>
    </Box>
  );
};

export default DayForecastCard;
