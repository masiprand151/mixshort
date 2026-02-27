import { View, Text, Pressable, ScrollView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../hooks/useTheme";
import CategoryItem from "./CategoryItem";
import { useState } from "react";
import ButtonSearch from "./ButtonSearch";
import Category from "./Category";

const dumy = Array.from({ length: 20 }).map((_, i) => ({
  name: `data_${i}`,
}));

export default function DiscoverHeader({ setOpenButtonSheed, tags }) {
  const tabBarHeight = useBottomTabBarHeight();
  const theme = useTheme();

  return (
    <View
      style={{
        paddingTop: tabBarHeight,
      }}
    >
      {/* button search */}
      <ButtonSearch />
      <Category
        setOpenButtonSheed={setOpenButtonSheed}
        data={tags.map((item) => ({ name: item }))}
      />
    </View>
  );
}
