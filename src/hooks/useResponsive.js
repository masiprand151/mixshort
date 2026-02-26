import { useWindowDimensions, PixelRatio } from "react-native";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export default function useResponsive() {
  const { width, height } = useWindowDimensions();

  const scale = (size) => (width / guidelineBaseWidth) * size;

  const verticalScale = (size) => (height / guidelineBaseHeight) * size;

  const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

  const normalize = (size) => {
    const newSize = scale(size);
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };

  const wp = (percent) => (width * percent) / 100;

  const hp = (percent) => (height * percent) / 100;

  const isTablet = width >= 768;

  const isLandscape = width > height;

  return {
    width,
    height,
    scale,
    verticalScale,
    moderateScale,
    normalize,
    wp,
    hp,
    isTablet,
    isLandscape,
  };
}
