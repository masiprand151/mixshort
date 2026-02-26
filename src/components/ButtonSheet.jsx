import { View, Pressable, useWindowDimensions } from "react-native";
import { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../hooks/useTheme";

export default function BottomSheet({
  visible,
  onClose,
  resizeVisible = false,
  children,
  initialHeight = 300,
}) {
  const { height, width } = useWindowDimensions();
  const theme = useTheme();

  const [sheetHeight, setSheetHeight] = useState(initialHeight);

  const startY = useRef(0);
  const startHeight = useRef(initialHeight);

  if (!visible) return null;

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width,
        height,
        zIndex: 10000,
      }}
    >
      {/* backdrop */}
      <Pressable
        style={{ flex: 1, backgroundColor: theme.colors.backdrop }}
        onPress={onClose}
      />

      {/* sheet */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width,
          height: sheetHeight,
          backgroundColor: theme.colors.card,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        {onClose && (
          <Pressable
            onPress={onClose}
            style={({ pressed }) => ({
              position: "absolute",
              paddingVertical: 10,
              paddingHorizontal: 16,
              opacity: pressed ? 0.5 : 1,
              zIndex: 10,
            })}
          >
            <Ionicons
              name="chevron-down"
              size={24}
              color={theme.colors.textMuted}
            />
          </Pressable>
        )}
        {/* drag handle */}
        {resizeVisible && (
          <Pressable
            style={{
              alignItems: "center",
              paddingVertical: 16,
            }}
            onTouchStart={(e) => {
              startY.current = e.nativeEvent.pageY;
              startHeight.current = sheetHeight;
            }}
            onTouchMove={(e) => {
              const diff = e.nativeEvent.pageY - startY.current;
              const newHeight = startHeight.current - diff;

              if (newHeight < 100) {
                onClose();
              }

              if (newHeight > 120 && newHeight < height) {
                setSheetHeight(newHeight);
              }
            }}
          >
            <View
              style={{
                width: 60,
                height: 6,
                borderRadius: 10,
                backgroundColor: theme.colors.border,
              }}
            />
          </Pressable>
        )}

        {/* content bebas */}
        <View style={{ flex: 1 }}>{children}</View>
      </View>
    </View>
  );
}
