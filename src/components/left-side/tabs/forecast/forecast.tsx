import { useGetCityName } from "@/assets/hooks/useGetCityName";
import {
  useGetWeatherByCityQuery,
  useGetWeatherByCoordsQuery,
} from "@/redux/weatherApi";

export const Forecast = () => {
  const chosenCity = useGetCityName();
  const { data: weatherData, isLoading: isLoadingWeather } =
    useGetWeatherByCityQuery(chosenCity);

  const {
    data: detailsData,
    isError,
    isLoading: isLoadingDetails,
  } = useGetWeatherByCoordsQuery(
    {
      lat: weatherData?.coord?.lat + "",
      lon: weatherData?.coord?.lon + "",
    },
    {
      skip: !weatherData?.coord,
    },
  );

  if (isError) return <>{detailsData?.message}</>;
  return <></>;
};
