import { View, Text, Pressable, ScrollView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../hooks/useTheme";
import CategoryItem from "./CategoryItem";
import { useState } from "react";

const dumy = Array.from({ length: 20 }).map((_, i) => ({
  name: `data_${i}`,
}));

export default function DiscoverHeader({ setOpenButtonSheed }) {
  const tabBarHeight = useBottomTabBarHeight();
  const theme = useTheme();
  const [active, setActive] = useState(0);

  const handleCategoryPress = (item, i) => {
    setActive(i);
  };

  return (
    <View
      style={{
        paddingTop: tabBarHeight,
      }}
    >
      {/* button search */}
      <Pressable
        style={({ pressed }) => ({
          paddingVertical: theme.spacing.sm,
          paddingHorizontal: theme.spacing.md,
          backgroundColor: theme.colors.buttonSecondary,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: theme.radius.full,
          gap: theme.spacing.sm,
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Ionicons
          name="search"
          size={theme.typography.h2.fontSize}
          color={theme.colors.placeholder}
        />
        <Text
          style={{
            color: theme.colors.placeholder,
            ...theme.typography.body,
          }}
        >
          Search...
        </Text>
      </Pressable>

      <View
        style={{
          paddingRight: theme.spacing.lg,
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: theme.spacing.md,
          }}
        >
          {dumy.map((item, i) => (
            <CategoryItem
              key={i}
              item={item}
              active={active === i}
              onPress={() => handleCategoryPress(item, i)}
            />
          ))}
        </ScrollView>
        <Pressable
          onPress={() => setOpenButtonSheed(true)}
          style={({ pressed }) => ({
            position: "absolute",
            height: "100%",
            justifyContent: "center",
            right: 0,
            opacity: pressed ? 0.8 : 1,
          })}
        >
          <Ionicons
            name="chevron-down"
            size={theme.typography.h3.fontSize}
            color={theme.colors.textPrimary}
          />
        </Pressable>
      </View>

      <Text>DiscoverHeader</Text>
    </View>
  );
}
