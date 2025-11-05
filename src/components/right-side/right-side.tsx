import { useActions, useAppSelector } from "@/redux/hooks";
import type { RootState } from "@/redux/store";
import s from "./right-side.module.css";

export const RightSide = () => {
  const favorites = useAppSelector(
    (s: RootState) => s.weatherSliceReducer.favorites,
  );
  const { setCity } = useActions();
  return (
    <div className={s["right-side"]}>
      <div className={s["right-side__title"]}>
        <h5 className={s["title"]}>Added Locations</h5>
      </div>
      <ul className={s["right-side__favorites"]}>
        {favorites.length !== 0
          ? favorites.map((cityName) => (
              <button
                className={s["favorite-city"]}
                key={cityName}
                onClick={() => setCity(cityName)}
              >
                {cityName}
              </button>
            ))
          : "Пока нет избранных городов"}
      </ul>
    </div>
  );
};
