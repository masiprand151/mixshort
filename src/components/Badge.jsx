import { View, Text } from "react-native";
import useTheme from "../hooks/useTheme";

export default function Badge({
  variant = "primary",
  containerStyle = {},
  textStyle,
  visible = true,
  title,
}) {
  const theme = useTheme();

  return (
    visible && (
      <View
        style={[
          {
            backgroundColor: theme.colors[variant],
            paddingHorizontal: theme.spacing.sm,
            paddingVertical: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            justifyContent: "center",
            alignItems: "center",
          },
          containerStyle,
        ]}
      >
        <Text
          style={[
            theme.typography.span,
            {
              color: theme.colors.textPrimary,
              fontStyle: "italic",
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    )
  );
}
