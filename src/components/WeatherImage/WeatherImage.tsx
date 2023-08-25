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
};

const WeatherImage: React.FC<WeatherImageProps> = ({ image }) => {

  return (
    <Box>
      {image === "Clouds" && <img src={HeavyCloud} alt="" />}
      {image === "Rain" && <img src={HeavyRain} alt="" />}
      {image === "Haze" && <img src={LightCloud} alt="" />}
      {image === "Clear" && <img src={Clear} alt="" />}
      {image === "Hail" && <img src={Hail} alt="" />}
      {image === "Shower" && <img src={Shower} alt="" />}
      {image === "Snow" && <img src={Snow} alt="" />}
      {image === "Thunderstorm" && <img src={Thunderstorm} alt="" />}
      {image === "Sleet" && <img src={Sleet} alt="" />}
      {image === "Light Rain" && <img src={LightRain} alt="" />}
    </Box>
  );
};

export default WeatherImage;
