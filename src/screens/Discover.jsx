import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import useTheme from "../hooks/useTheme";
import DiscoverHeader from "../components/DiscoverHeader";
import BottomSheet from "../components/ButtonSheet";
import { useState } from "react";
import useDrama from "../hooks/useDrama";
import Badge from "../components/Badge";
import Flame from "../components/Flame";

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - 20;

export default function Discover() {
  const theme = useTheme();
  const [openButtonSheed, setOpenButtonSheed] = useState(false);
  const { drama, meta, loading, refreshing, tags, page, setPage, refresh } =
    useDrama();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          width: ITEM_WIDTH,
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
              height: ITEM_WIDTH * 1.5,
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
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.md,
      }}
    >
      <DiscoverHeader tags={tags} setOpenButtonSheed={setOpenButtonSheed} />

      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={drama}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ gap: 10 }}
          onEndReached={() => {
            if (meta && page < meta.totalPage) {
              setPage((prev) => prev + 1);
            }
          }}
          refreshing={refreshing}
          onRefresh={refresh}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && <ActivityIndicator size={"small"} />}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <BottomSheet
        visible={openButtonSheed}
        resizeVisible={true}
        onClose={() => setOpenButtonSheed((prev) => !prev)}
        initialHeight={"auto"}
      >
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            paddingVertical: theme.spacing.md,
            paddingHorizontal: theme.spacing.md,
            gap: theme.spacing.sm,
          }}
        >
          {tags?.map((item, i) => (
            <TouchableOpacity
              key={item}
              style={{
                backgroundColor: theme.colors.buttonSecondary,
                borderColor: theme.colors.border,
                borderWidth: 1,
                paddingVertical: theme.spacing.sm,
                width: "49%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: theme.radius.sm,
              }}
            >
              <Text
                numberOfLines={1}
                style={[
                  {
                    color: theme.colors.textSecondary,
                  },
                  theme.typography.body,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
    </View>
  );
}
