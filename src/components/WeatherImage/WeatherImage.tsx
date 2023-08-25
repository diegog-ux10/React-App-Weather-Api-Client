import React from "react";

import { Box } from "@mui/material";

import HeavyCloud from "../../assets/HeavyCloud.png";
import Clear from "../../assets/Clear.png";
import Hail from "../../assets/Hail.png";
import HeavyRain from "../../assets/HeavyRain.png";
import LightRain from "../../assets/LightRain.png";
import LightCloud from "../../assets/LightCloud.png";
import Shower from "../../assets/Shower.png";
import Snow from "../../assets/Snow.png";
import Thunderstorm from "../../assets/Thunderstorm.png";
import Sleet from "../../assets/Sleet.png";

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
