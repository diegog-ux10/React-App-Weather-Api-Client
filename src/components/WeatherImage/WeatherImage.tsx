import React from "react";

import { Box } from "@mui/material";

import HeavyCloud from "/src/HeavyCloud.png?url";
import Clear from "/src/Clear.png?url";
import Hail from "/src/Hail.png?url";
import HeavyRain from "/src/HeavyRain.png?url";
import LightRain from "/src/LightRain.png?url";
import LightCloud from "/src/LightCloud.png?url";
import Shower from "/src/Shower.png?url";
import Snow from "/src/Snow.png?url";
import Thunderstorm from "/src/Thunderstorm.png?url";
import Sleet from "/src/Sleet.png?url";

export type WeatherImageProps = {
  image: string;
  width?: string;
};

const WeatherImage: React.FC<WeatherImageProps> = ({ image, width }) => {
  return (
    <Box>
      {image === "Clouds" && <img src={HeavyCloud} alt="" width={width} />}
      {image === "Rain" && <img src={HeavyRain} alt="" width={width} />}
      {image === "Haze" && <img src={LightCloud} alt="" width={width} />}
      {image === "Clear" && <img src={Clear} alt="" width={width} />}
      {image === "Hail" && <img src={Hail} alt="" width={width} />}
      {image === "Shower" && <img src={Shower} alt="" width={width} />}
      {image === "Snow" && <img src={Snow} alt="" width={width} />}
      {image === "Thunderstorm" && (
        <img src={Thunderstorm} alt="" width={width} />
      )}
      {image === "Sleet" && <img src={Sleet} alt="" />}
      {image === "Light Rain" && <img src={LightRain} alt="" width={width} />}
    </Box>
  );
};

export default WeatherImage;
