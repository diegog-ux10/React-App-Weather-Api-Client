import React, { useContext, useMemo } from "react";

import {
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  CircularProgress,
  TextField,
  Stack,
} from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";

import { formatDate } from "../../helper/formatDate";

import background from "../../assets/sidebar-background.png";
import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";
import { theme } from "../../theme/theme";
import { WeatherImage } from "../WeatherImage";

const SideBar: React.FC = () => {
  const {
    searchOpen,
    setSearchOpen,
    currentCityData,
    loading,
    handleChange,
    handleClick,
    handleIpClick,
  } = useContext(WeatherContext) as WeatherContextType;

  const temp = useMemo(() => {
    return Math.round(currentCityData?.main.temp!).toString();
  }, [currentCityData]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {!loading ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                sx={{ background: theme.palette.gray.main, color: "white" }}
                variant="contained"
                onClick={() => setSearchOpen(true)}
              >
                Search for places
              </Button>
              <IconButton
                sx={{ background: theme.palette.gray.main, color: "white" }}
                onClick={handleIpClick}
              >
                <GpsFixedIcon />
              </IconButton>
            </Box>
            <WeatherImage image={currentCityData?.weather[0].main!} />
            <Box display="flex" alignItems="center">
              <Typography
                fontSize="144px"
                sx={{ color: theme.palette.grayLight.main }}
              >
                {temp}
              </Typography>
              <Typography
                fontSize="48px"
                sx={{ color: theme.palette.gray.main }}
              >
                ºC
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize="36px"
                sx={{ color: theme.palette.gray.main }}
              >
                {currentCityData?.weather[0].main}
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize="18px"
                sx={{ color: theme.palette.gray.main }}
              >
                Today - {formatDate(currentCityData?.dt!)}
              </Typography>
            </Box>
            <Box display="flex">
              <PlaceIcon sx={{ color: "#88869D" }} />
              <Typography
                fontSize="18px"
                sx={{ color: theme.palette.gray.main }}
              >
                {currentCityData?.name}
              </Typography>
            </Box>
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
      <Drawer
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#1E213A",
          },
        }}
      >
        <Box width="500px" padding="48px">
          <Stack flexDirection="row" justifyContent="space-between">
            <TextField
              type="text"
              placeholder="search location"
              onChange={handleChange}
              size="small"
              InputProps={{
                startAdornment: (
                  <SearchIcon
                    sx={{ marginRight: 2, color: theme.palette.gray.main }}
                  />
                ),
                sx: {
                  "& input": {
                    color: "gray.main",
                  },
                },
              }}
            />
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{ backgroundColor: theme.palette.purple.main }}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
