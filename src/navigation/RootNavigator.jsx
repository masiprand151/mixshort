import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";
import { StatusBar } from "expo-status-bar";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
