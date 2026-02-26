import { View, Text } from "react-native";
import useTheme from "../hooks/useTheme";
import DiscoverHeader from "../components/DiscoverHeader";
import BottomSheet from "../components/ButtonSheet";
import { useState } from "react";

export default function Discover() {
  const theme = useTheme();
  const [openButtonSheed, setOpenButtonSheed] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.md,
      }}
    >
      <DiscoverHeader setOpenButtonSheed={setOpenButtonSheed} />
      <Text>Discover</Text>

      <BottomSheet
        visible={openButtonSheed}
        resizeVisible={true}
        onClose={() => setOpenButtonSheed((prev) => !prev)}
      >
        <Text style={{ color: "#fff" }}>jkjk</Text>
      </BottomSheet>
    </View>
  );
}
