import s from "./App.module.css";
import { LeftSide } from "./components/left-side/left-side";
import { RightSide } from "./components/right-side/right-side";
import { Search } from "./components/ui/search";

export const App = () => {
  return (
    <div className={s["main"]}>
      <Search />
      <div className={s["content-wrapper"]}>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

// const { setGeolocation } = useActions();
// const { geo, chosenCity, geoTried } = useAppSelector(
//   (s: RootState) => s.weatherSliceReducer,
// );

// useEffect(() => {
//   if (geoTried || chosenCity) return;
//   if (!navigator.geolocation) {
//     setGeolocation({ lat: null, lon: null });
//     return;
//   }

//   navigator.geolocation.getCurrentPosition(
//     (pos) =>
//       setGeolocation({
//         lat: pos.coords.latitude,
//         lon: pos.coords.longitude,
//       }),

//     () => setGeolocation({ lat: null, lon: null }),
//     { timeout: 7000 },
//   );
// }, [chosenCity]);

// const queryArg =
//   geo.lat !== null && geo.lon !== null
//     ? { lat: geo.lat, lon: geo.lon }
//     : undefined;

// const { data, isLoading, isError } = useGetOneCallQuery(queryArg);
// console.log(data);
