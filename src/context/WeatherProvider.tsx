import React, { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import { City } from "../models/city";
import { weatherApi } from "../api/weather-api";
import { Forecast } from "../models/forecast";
import { setWeatherData } from "../shared/setWeatherData";

type WeatherProviderProps = {
  children?: React.ReactNode;
};

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [search, setSearch] = useState<string | undefined>();
  const [currentCity, setCurrentCity] = useState<string>("caracas");
  const [currentCityData, setCurrentCityData] = useState<City>();
  const [forecast, setForecast] = useState<Forecast>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [ipWeather, setIpWeather] = useState<City>();

  useEffect(() => {
    fetchData(currentCity);

    async function fetchData(city: string) {
      setLoading(true);
      const res = await weatherApi.getWeather(city);

      setCurrentCityData(res.data);

      const { lon, lat } = res.data.coord;
      const data = await weatherApi.getForecast(lat, lon);

      setForecast(data.data);
      setLoading(false);
    }
  }, [currentCity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    console.log(search);

    if (search) {
      setCurrentCity(search);
    }

    if (searchOpen) {
      setSearchOpen(false);
    }
  };

  const handleIpClick = async () => {
    try {
      setLoading(true);
      setWeatherData(setIpWeather);
      if(ipWeather) {
        setCurrentCityData(ipWeather)
      }
      setLoading(false)      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        currentCity,
        currentCityData,
        forecast,
        loading,
        ipWeather,
        searchOpen,
        setSearch,
        setCurrentCity,
        setCurrentCityData,
        setForecast,
        setLoading,
        setSearchOpen,
        setIpWeather,
        handleChange,
        handleClick,
        handleIpClick
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
