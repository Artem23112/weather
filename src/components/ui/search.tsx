import { useGetCityName } from "@/assets/hooks/useGetCityName";
import { useActions } from "@/redux/hooks";
import { useEffect, useState } from "react";
import s from "./search.module.css";

export const Search = () => {
  const { setCity } = useActions();
  const chosenCity = useGetCityName();

  const [localValue, setLocalValue] = useState(chosenCity || "");

  useEffect(() => {
    setLocalValue(chosenCity || "");
  }, [chosenCity]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setCity(localValue);
    }, 500);

    return () => clearTimeout(handler);
  }, [localValue, setCity]);

  return (
    <div className={s["search-field"]}>
      <input
        className={s["search"]}
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />
      <img
        className={s["search-icon"]}
        src="./src/assets/icons/search.svg"
        alt=""
      />
    </div>
  );
};
