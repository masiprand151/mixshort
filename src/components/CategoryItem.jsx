import { View, Text, Pressable, TouchableOpacity } from "react-native";
import useTheme from "../hooks/useTheme";

export default function CategoryItem({ item, active, onPress }) {
  const theme = useTheme();
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.xs,
          alignItems: "center",
          backgroundColor: active
            ? theme.utils.alpha("primary", 0.3)
            : theme.colors.buttonSecondary,
          borderRadius: theme.radius.sm,
        }}
      >
        <Text
          style={[
            {
              color: active ? theme.colors.primary : theme.colors.textSecondary,
            },
            theme.typography.body,
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
      {/* clear */}
      <View style={{ width: theme.spacing.sm }} />
    </>
  );
}
