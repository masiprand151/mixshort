import { View, Text, Pressable } from "react-native";
import useTheme from "../hooks/useTheme";

export default function CategoryItem({ item, active, onPress }) {
  const theme = useTheme();
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.xs,
          alignItems: "center",
          backgroundColor: active
            ? theme.utils.alpha("warning", 0.2)
            : theme.colors.buttonSecondary,
          borderRadius: theme.radius.sm,
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text
          style={{
            color: active ? theme.colors.textPrimary : theme.colors.textMuted,
          }}
        >
          {item.name}
        </Text>
      </Pressable>
      {/* clear */}
      <View style={{ width: theme.spacing.sm }} />
    </>
  );
}
