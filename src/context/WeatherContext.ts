import React, { createContext } from "react";
import { City } from "../models/city";
import { Forecast } from "../models/forecast";

export type WeatherContextType = {
    search: string | undefined
    currentCity: string
    currentCityData?: City
    forecast?: Forecast
    loading: boolean
    ipWeather: City | undefined
    searchOpen: boolean
    setSearch: React.Dispatch<React.SetStateAction<string | undefined>>
    setCurrentCity: React.Dispatch<React.SetStateAction<string>>
    setCurrentCityData: React.Dispatch<React.SetStateAction<City | undefined>>
    setForecast: React.Dispatch<React.SetStateAction<Forecast | undefined>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIpWeather: React.Dispatch<React.SetStateAction<City | undefined>>
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleClick: () => void
    handleIpClick: () => void
}


export const WeatherContext = createContext<WeatherContextType | null>(null)