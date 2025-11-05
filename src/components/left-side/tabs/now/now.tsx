import { useGetCityName } from "@/assets/hooks/useGetCityName";
import dot from "@/assets/icons/degrees-dot.svg";
import favorite_active from "@/assets/icons/favorite_active.png";
import favorite_unactive from "@/assets/icons/favorite_unactive.png";
import { useActions, useAppSelector } from "@/redux/hooks";
import type { RootState } from "@/redux/store";
import { useGetWeatherByCityQuery } from "@/redux/weatherApi";
import { getImgUrl } from "@/utils/getImgUrl";
import s from "./now.module.css";

export const Now = () => {
  const { toggleFavorite } = useActions();
  const favorites = useAppSelector(
    (s: RootState) => s.weatherSliceReducer.favorites,
  );
  const cityName = useGetCityName();
  const {
    data: weatherInfo,
    isError,
    isLoading,
  } = useGetWeatherByCityQuery(cityName);
  console.log(weatherInfo);

  if (isLoading) return "Загрузка...";
  if (isError || !weatherInfo) return "Нет такого города";

  const icon = favorites.includes(weatherInfo.name)
    ? favorite_active
    : favorite_unactive;
  return (
    <div className={s["left-side__main"]}>
      <p className={s["degrees"]}>
        {Math.round(weatherInfo.main.temp)}{" "}
        <img className={s["degrees-dot"]} src={dot} alt="deg" />
      </p>
      <img
        className={s["weather-img"]}
        src={getImgUrl(weatherInfo.weather[0].icon)}
        alt=""
      />
      <div className={s["bottom-wrapper"]}>
        <h1 className={s["city-name"]}>{weatherInfo.name}</h1>
        <button onClick={() => toggleFavorite(weatherInfo.name)}>
          <img className={s["favorite-icon"]} src={icon} />
        </button>
      </div>
    </div>
  );
};
