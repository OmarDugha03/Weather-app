export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherData {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
export interface ListItem {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
}
export interface City {
  id: number
  name: string
  coord: {
    lat: number
    lon: number
  }
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface FiveDayForecast {
  cod: string
  message: number
  cnt: number
  list: ListItem[]
  city: City
}
export interface DailyUnits {
  time: string
  uv_index_max: string
  uv_index_clear_sky_max: string
}

export interface DailyData {
  time: string[]
  uv_index_max: number
  uv_index_clear_sky_max: number
}
export interface LocationData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  daily_units: DailyUnits
  daily: DailyData
}

interface Rain {
  "3h"?: number
  "1h"?: number
}
interface ForecastItem {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind?: Wind
  visibility?: number
  pop?: number
  rain?: Rain
  sys: Sys
  dt_txt: string
}

export interface Precipitation {
  cod: string
  message: number
  cnt: number
  list: ForecastItem[]
  city: {
    id: number
    name: string
    coord: {
      lat: string
      lon: string
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
}

type Temperature = {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

type FeelsLike = {
  day: number
  night: number
  eve: number
  morn: number
}
export interface ForecastData {
  dt: number
  sunrise: number
  sunset: number
  temp: Temperature
  feels_like: FeelsLike
  pressure: number
  humidity: number
  weather: Weather[]
  speed: number
  deg: number
  gust: number
  clouds: number
  pop: number
  rain?: number
}

export interface TenDayForecastData {
  city: City
  cod: string
  message: number
  cnt: number
  list: ForecastData[]
}
