import { useContext } from "react";

import "./App.css";

import { SideBar } from "./components/SideBar";

import { WeatherContext, WeatherContextType } from "./context/WeatherContext";
import { Box, Typography } from "@mui/material";
import { theme } from "./theme/theme";
import { ForecastList, WeatherDetails } from "./components";

function App() {
  const { currentCity } = useContext(WeatherContext) as WeatherContextType;

  return (
    <>
      <Box display="flex" sx={{ width: "100vw", height: "100vh" }}>
        <Box sx={{ width: "30%" }}>{currentCity && <SideBar />}</Box>
        <Box
          sx={{
            width: "70%",
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            padding: "120px",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <Box>
            <ForecastList />
          </Box>
          <Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: "36px"}}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                  color: theme.palette.grayLight.main,
                }}
              >
                Todays HighLights
              </Typography>
              <WeatherDetails />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
