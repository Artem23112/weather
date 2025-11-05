import clsx from "clsx";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import s from "./left-side.module.css";
import { Details } from "./tabs/details/details";
import { Forecast } from "./tabs/forecast/forecast";
import { Now } from "./tabs/now/now";

export const LeftSide = () => {
  const location = useLocation();
  return (
    <div className={s["left-side"]}>
      <div className={s["left-side__main"]}>
        <Routes>
          <Route index element={<Now />} />
          <Route path="/now" element={<Now />}></Route>
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/details" element={<Details />} loader={() => {}} />
        </Routes>
      </div>
      <nav className={s["tabs"]}>
        <NavLink
          to="/now"
          className={clsx(
            s["tab"],
            location.pathname === "/now" && s["active"],
          )}
        >
          Now
        </NavLink>
        <NavLink
          to="/details"
          className={clsx(
            s["tab"],
            location.pathname === "/details" && s["active"],
          )}
        >
          Details
        </NavLink>
        <NavLink
          to="/forecast"
          className={clsx(
            s["tab"],
            location.pathname === "/forecast" && s["active"],
          )}
        >
          Forecast
        </NavLink>
      </nav>
    </div>
  );
};
