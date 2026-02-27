import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import useTheme from "../hooks/useTheme";
import DiscoverHeader from "../components/DiscoverHeader";
import BottomSheet from "../components/ButtonSheet";
import { useCallback, useState } from "react";
import useDrama from "../hooks/useDrama";
import DiscoverCard from "../components/DiscoverCard";

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width / 2 - 20;

export default function Discover() {
  const theme = useTheme();
  const [openButtonSheed, setOpenButtonSheed] = useState(false);
  const { drama, meta, loading, refreshing, tags, page, setPage, refresh } =
    useDrama();

  const renderItem = useCallback(
    ({ item }) => <DiscoverCard width={ITEM_WIDTH} item={item} />,
    [ITEM_WIDTH],
  );

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
