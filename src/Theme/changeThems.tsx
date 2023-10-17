import React, { useContext, useEffect, useState } from "react";
import { rootTypes, store } from "../Context/Store";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const getInitialState = () => {
  const isDay = localStorage.getItem("isDay");
  return isDay ? JSON.parse(isDay) : true;
};

export default function ChangeTheme() {
  const { changeTheme, setChangeTheme } = useContext(store) as rootTypes;
  const [isDay, setIsDay] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("isDay", JSON.stringify(isDay));
  }, [isDay]);

  const toggleTheme = () => {
    if (changeTheme === true) {
      setChangeTheme(false);
    } else {
      if (changeTheme === false) {
        setChangeTheme(true);
      }
    }
  };

  const ChangeIcon = () => {
    if (isDay === true) {
      setIsDay(false);
    } else {
      if (isDay === false) {
        setIsDay(true);
      }
    }
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        toggleTheme();
        ChangeIcon();
      }}
    >
      {isDay ? <LightModeIcon /> : <DarkModeIcon />}
    </div>
  );
}
