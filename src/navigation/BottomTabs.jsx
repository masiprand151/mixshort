import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useTheme from "../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import Clips from "../screens/Clips";
import Discover from "../screens/Discover";
import Bookmark from "../screens/Bookmark";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Untuk Anda"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          borderTopWidth: 0,
          ...theme.shadow.medium,
        },
      }}
    >
      <Tab.Screen
        name="Temukan"
        component={Clips}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="play-circle"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.textMuted}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Untuk Anda"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="compass-outline"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.textMuted}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Daftar Saya"
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bookmark-outline"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.textMuted}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.textMuted}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
