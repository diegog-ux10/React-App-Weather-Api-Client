import React from "react";
import { Box, Typography } from "@mui/material";

import { theme } from "../../theme/theme";
import { formatDate } from "../../helper/formatDate";

export type DayForecastCardProps = {
  index: number;
  date: number;
  icon: string;
  maxTemp: number;
  minTemp: number;
};

const DayForecastCard: React.FC<DayForecastCardProps> = ({
  index,
  date,
  icon,
  maxTemp,
  minTemp,
}) => {
  const dayDate = index === 0 ? "Tomorrow" : formatDate(date);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        padding: "24px 18px",
        textAlign: "center",
      }}
    >
      <Typography sx={{ color: theme.palette.grayLight.main }}>
        {dayDate}
      </Typography>
      <Box>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
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