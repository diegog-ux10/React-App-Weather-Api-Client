import React from "react";
import { Box, IconButton, Typography } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { theme } from "../../theme/theme";

export type DynamicArrowProps = {
	deg: string
};

const DynamicArrow: React.FC<DynamicArrowProps> = ({deg}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
      <IconButton
        sx={{ backgroundColor: theme.palette.gray.main }}
        size="small"
      >
        <NavigationIcon
          sx={{
            color: theme.palette.grayLight.main,
            transform: `rotate(${deg}deg)`,
          }}
        />
      </IconButton>
      <Typography sx={{ color: theme.palette.grayLight.main }}>WSW</Typography>
    </Box>
  );
};

export default DynamicArrow;
