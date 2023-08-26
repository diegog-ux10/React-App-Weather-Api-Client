import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../theme/theme";

export type SimpleWeatherDetailCardProps = {
  title: string;
  data: string ;
  metric: string;
  render?: React.ReactNode;
};

const SimpleWeatherDetailCard: React.FC<SimpleWeatherDetailCardProps> = ({
  title,
  data,
  metric,
  render,
}) => {

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        padding: "24px 36px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flex: "1 1 auto"
      }}
    >
      <Typography sx={{ color: theme.palette.grayLight.main, fontWeight: 500 }}>
        {title}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          sx={{
            color: theme.palette.grayLight.main,
            fontSize: "64px",
            fontWeight: 700,
          }}
        >
          {data}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.grayLight.main,
            fontSize: "40px",
            fontWeight: 500,
          }}
        >
          {metric}
        </Typography>
      </Box>
      {render && render}
    </Box>
  );
};

export default SimpleWeatherDetailCard;
