import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { theme } from "../../theme/theme";

export type ProgressBarProps = {
  value: number
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFEC65" : "#308fe8",
  },
}));

// Inspired by the former Facebook spinners.

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{width: "100%", display: "flex", justifyContent:"space-between"}}>
        <Typography sx={{color: theme.palette.gray.main}}>0</Typography>
        <Typography sx={{color: theme.palette.gray.main}}>50</Typography>
        <Typography sx={{color: theme.palette.gray.main}}>100</Typography>
      </Box>
      <BorderLinearProgress variant="determinate" value={value} />
      <Box sx={{width: "100%", display: "flex", justifyContent:"end"}}>
        <Typography sx={{color: theme.palette.gray.main, width: "fit-content"}}>%</Typography>
      </Box>
    </Box>
  );
}

export default ProgressBar
