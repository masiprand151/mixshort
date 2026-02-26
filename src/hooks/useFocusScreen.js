import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function useFocusScreen() {
  const [isFocus, setIsFocus] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setIsFocus(true);
      return () => {
        setIsFocus(false);
      };
    }, []),
  );
  return {
    isFocus,
  };
}
