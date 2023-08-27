import { useContext } from "react";

import "./App.css";

import { SideBar } from "./components/SideBar";

import { WeatherContext, WeatherContextType } from "./context/WeatherContext";
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material";
import { theme } from "./theme/theme";
import { ForecastList, WeatherDetails } from "./components";

function App() {
  const { currentCity, isFarenheit, setIsFarenheit, dialogOpen, handleDialogClose, error } = useContext(
    WeatherContext
  ) as WeatherContextType;

  return (
    <>
      <Box
        display="flex"
        sx={{
          width: "100vw",
          height: { xs: "fit-content", xl: "100vh" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%", lg: "30%" },
            height: { xs: "100vh", sm: "unset" },
            flex: { xs: "1 1 auto" },
          }}
        >
          {currentCity && <SideBar />}
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%", lg: "70%" },
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            padding: { xs: "48px 20px", md: "40px", lg: "80px" },
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <Stack
            flexDirection="row"
            gap={2}
            justifyContent="end"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Avatar
              sx={{
                backgroundColor: isFarenheit
                  ? theme.palette.grayLight.main
                  : theme.palette.gray.main,
                color: !isFarenheit
                  ? theme.palette.grayLight.main
                  : theme.palette.secondary.main,
              }}
              onClick={() => setIsFarenheit(true)}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                ºF
              </Typography>
            </Avatar>
            <Avatar
              sx={{
                backgroundColor: !isFarenheit
                  ? theme.palette.grayLight.main
                  : theme.palette.gray.main,
                color: isFarenheit
                  ? theme.palette.grayLight.main
                  : theme.palette.secondary.main,
              }}
              onClick={() => setIsFarenheit(false)}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                ºC
              </Typography>
            </Avatar>
          </Stack>

          <Box>
            <ForecastList />
          </Box>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "36px" }}>
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

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {error}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Try Again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
