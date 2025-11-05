import { useAppSelector } from "@/redux/hooks";
import type { RootState } from "@/redux/store";

export const useGetCityName = () => {
  const cityName = useAppSelector(
    (s: RootState) => s.weatherSliceReducer.chosenCity,
  );
  return cityName;
};
