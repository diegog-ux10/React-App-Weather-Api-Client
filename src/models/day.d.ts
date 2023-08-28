import { Weather } from "./city";

export type Day = {
    dt:         number;
    sunrise:    number;
    sunset:     number;
    moonrise:   number;
    moonset:    number;
    moon_phase: number;
    temp:       Temp;
    feels_like: FeelsLike;
    pressure:   number;
    humidity:   number;
    dew_point:  number;
    wind_speed: number;
    wind_deg:   number;
    wind_gust:  number;
    weather:    Weather[];
    clouds:     number;
    pop:        number;
    rain:       number;
    uvi:        number;
}

export type FeelsLike = {
    day:   number;
    night: number;
    eve:   number;
    morn:  number;
}

export type Temp = {
    day:   number;
    min:   number;
    max:   number;
    night: number;
    eve:   number;
    morn:  number;
}


