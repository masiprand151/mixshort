import { View, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import useTheme from "../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";

export default function Category({ data, setOpenButtonSheed }) {
  const theme = useTheme();
  const [active, setActive] = useState(0);

  const handleCategoryPress = (item, i) => {
    setActive(i);
  };

  return (
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
        {data.map((item, i) => (
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
  );
}
