import { useContext } from "react";

import "./App.css";

import { SideBar } from "./components/SideBar";

import { WeatherContext, WeatherContextType } from "./context/WeatherContext";
import { Box } from "@mui/material";
import { theme } from "./theme/theme";
import { ForecastList } from "./components/ForecastList";

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
            padding: "80px"
          }}
        >
          <Box>
            <ForecastList />
          </Box>
          <Box>
            <h1>Todays HighLights</h1>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
