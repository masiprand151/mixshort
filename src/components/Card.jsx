import { View } from "react-native";

export default function Card({ children, style, theme, ...props }) {
  return (
    <View
      style={[
        {
          backgroundColor: theme?.colors?.card || "#1F2937",
          padding: theme?.spacing?.md || 16,
          borderRadius: theme?.radius?.md || 12,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
