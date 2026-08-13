import { createContext } from "react";

const currentTemperatureUnitContext = createContext({
  currentTemperatureUnit: "F",
  handleToggleSwitchChange: () => {},
});

export default currentTemperatureUnitContext;
