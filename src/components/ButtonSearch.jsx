import { Text, Pressable } from "react-native";
import useTheme from "../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonSearch() {
  const theme = useTheme();
  return (
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
  );
}
