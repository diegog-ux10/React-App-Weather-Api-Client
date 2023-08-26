import React from "react";

import { Box } from "@mui/material";

import HeavyCloud from "../../../public/HeavyCloud.png";
import Clear from "../../../public/Clear.png";
import Hail from "../../../public/Hail.png";
import HeavyRain from "../../../public/HeavyRain.png";
import LightRain from "../../../public/LightRain.png";
import LightCloud from "../../../public/LightCloud.png";
import Shower from "../../../public/Shower.png";
import Snow from "../../../public/Snow.png";
import Thunderstorm from "../../../public/Thunderstorm.png";
import Sleet from "../../../public/Sleet.png";

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
