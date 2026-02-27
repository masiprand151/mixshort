import { View, Text, TouchableOpacity, Image } from "react-native";
import useTheme from "../hooks/useTheme";
import { memo } from "react";
import Badge from "./Badge";
import Flame from "./Flame";

function DiscoverCard({ width, item, onPress }) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={(e) => onPress?.(e)}
      style={{
        width,
        marginBottom: theme.spacing.md,
        backgroundColor: theme.colors.card,
        borderRadius: theme.radius.sm,
        overflow: "hidden",
      }}
    >
      <View>
        <Image
          source={{ uri: item.thumbnail }}
          style={{
            width: "100%",
            height: width * 1.5,
          }}
        />
        {/* badge */}
        <View
          style={{
            position: "absolute",
            top: theme.spacing.sm,
            left: theme.spacing.sm,
            gap: theme.spacing.xs,
          }}
        >
          <Badge
            visible={item.isHot}
            title={"HOT"}
            variant="danger"
            containerStyle={{ width: theme.spacing.xxl }}
          />
          <Badge
            visible={item.isExclusive}
            title={"EXCLUSIVE"}
            variant="primary"
          />
        </View>
        <Flame playCount={item.playCount} />
      </View>

      <View
        style={{
          paddingHorizontal: theme.spacing.sm,
          paddingVertical: theme.spacing.sm,
          gap: theme.spacing.xs,
        }}
      >
        <Text
          numberOfLines={2}
          style={[
            {
              color: theme.colors.textPrimary,
            },
            theme.typography.body,
          ]}
        >
          {item.name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing.sm,
            flexWrap: "wrap",
          }}
        >
          {/* loop tags */}
          {item.tags?.slice(0, 2).map((tag, i) => (
            <View key={i} style={{}}>
              <Text
                style={[
                  { color: theme.colors.textSecondary },
                  theme.typography.caption,
                ]}
              >
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(DiscoverCard, (prev, next) => {
  return (
    prev.width === next.width &&
    prev.item.id === next.item.id &&
    prev.item.playCount === next.item.playCount &&
    prev.item.isHot === next.item.isHot &&
    prev.item.isExclusive === next.item.isExclusive
  );
});
