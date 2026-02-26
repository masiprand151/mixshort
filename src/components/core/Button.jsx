import { TouchableOpacity, Text } from "react-native";

export default function Button({
  title,
  onPress,
  style,
  textStyle,
  theme,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: theme?.colors?.primary || "#6366F1",
          padding: 12,
          borderRadius: theme?.radius?.md || 12,
          alignItems: "center",
        },
        style,
      ]}
      {...props}
    >
      <Text
        style={[{ color: theme?.colors?.onPrimary || "#FFFFFF" }, textStyle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
