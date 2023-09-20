import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

export const useAppcontext = () => {
  const context = useContext(AppContext);

  return { ...context };
};
