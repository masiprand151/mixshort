import { useState } from "react";
import { darkTheme } from "../libs/colors";

export default function useTheme() {
  const [mode, setMode] = useState("dark");
  const [theme, setTheme] = useState(darkTheme);

  return {
    ...theme,
    mode,
  };
}
