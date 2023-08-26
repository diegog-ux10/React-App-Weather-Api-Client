import React, { useContext, useMemo } from "react";

import {
  Box,
  Button,
  IconButton,
  Typography,
  Drawer,
  CircularProgress,
  Stack,
  InputBase,
  Paper,
} from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

import { formatDate } from "../../helper/formatDate";
import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";
import { theme } from "../../theme/theme";
import { WeatherImage } from "../WeatherImage";

import background from "../../../public/sidebar-background.png";
import { celsiusToFarenheit } from "../../helper/celsiusToFarenheit";

const SideBar: React.FC = () => {
  const {
    searchOpen,
    setSearchOpen,
    currentCityData,
    loading,
    handleChange,
    handleClick,
    handleIpClick,
    isFarenheit,
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
                sx={{
                  background: theme.palette.gray.main,
                  color: "white",
                  borderRadius: 0,
                }}
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
                {isFarenheit ? celsiusToFarenheit(temp) : temp}
              </Typography>
              <Typography
                fontSize="48px"
                sx={{ color: theme.palette.gray.main }}
              >
                 {isFarenheit ? "ºF" : "ºC"}
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
        <Box
          padding="12px 36px"
          sx={{ width: { xs: "100vw", md: "50vw", lg: "30vw" } }}
        >
          <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            marginBottom: "24px"
          }}>
            <IconButton onClick={() => setSearchOpen(false)}>
              <CloseIcon sx={{ color: theme.palette.grayLight.main }} />
            </IconButton>
          </Box>
          <Stack flexDirection="row" justifyContent="space-between" gap={1}>
            <Paper
              component="form"
              sx={{
                padding: "4px 12px",
                display: "flex",
                alignItems: "center",
                width: "auto",
                backgroundColor: theme.palette.secondary.main,
                border: "1px solid",
                borderColor: "#E7E7EB",
                borderRadius: 0,
              }}
            >
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={handleClick}
              >
                <SearchIcon sx={{ color: theme.palette.gray.main }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: theme.palette.grayLight.main }}
                placeholder="search location"
                inputProps={{ "aria-label": "search location weather" }}
                onChange={handleChange}
              />
            </Paper>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.purple.main,
                borderRadius: 0,
              }}
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
