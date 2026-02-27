import { View, Text } from "react-native";
import useTheme from "../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { formatCompactNumber } from "../libs/helpers";

export default function Flame({ playCount }) {
  const theme = useTheme();

  return (
    <View
      style={{
        position: "absolute",
        bottom: theme.spacing.sm,
        left: theme.spacing.sm,
        gap: theme.spacing.xs,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="flame"
          size={theme.typography.body.fontSize}
          color={theme.colors.textPrimary}
        />
        <Text
          style={[{ color: theme.colors.textPrimary }, theme.typography.body]}
        >
          {formatCompactNumber(playCount)}
        </Text>
      </View>
    </View>
  );
}
