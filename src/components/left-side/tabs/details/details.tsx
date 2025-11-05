import { useGetCityName } from "@/assets/hooks/useGetCityName";
import { useGetWeatherByCityQuery } from "@/redux/weatherApi";
import dayjs from "dayjs";
import s from "./details.module.css";

import mini_dot from "@/assets/icons/dot-mini.svg";
export const Details = () => {
  const chosenCity = useGetCityName();
  const { data: weatherInfo, isError } = useGetWeatherByCityQuery(chosenCity);

  if (isError || !weatherInfo) return "Неизвестный город";
  return (
    <div className={s["container"]}>
      <h2 className="">{weatherInfo.name}</h2>
      <ul>
        <li className={s["details-item"]}>
          Temperature:
          <span className={s["degrees"]}>
            {Math.round(weatherInfo.main.temp)} <img src={mini_dot} />
          </span>
        </li>
        <li className={s["details-item"]}>
          Feels like:
          <span className={s["degrees"]}>
            {Math.round(weatherInfo.main.feels_like)} <img src={mini_dot} />
          </span>
        </li>
        <li className={s["details-item"]}>
          Weather: <span>{weatherInfo.weather[0].main}</span>
        </li>
        <li className={s["details-item"]}>
          Sunrise: <span>{dayjs(weatherInfo.sys.sunrise).format("HH:mm")}</span>
        </li>
        <li className={s["details-item"]}>
          Sunset: <span>{dayjs(weatherInfo.sys.sunset).format("HH:mm")}</span>
        </li>
      </ul>
    </div>
  );
};
