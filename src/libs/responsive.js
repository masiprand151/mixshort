import { Dimensions, PixelRatio } from "react-native";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// static screen
const { width, height } = Dimensions.get("window");

// width scale
export const scale = (size) => (width / guidelineBaseWidth) * size;

// height scale
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;

// moderate scale (recommended for spacing)
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// normalize font
export const normalize = (size) => {
  const newSize = scale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// percentage width
export const wp = (percent) => (width * percent) / 100;

// percentage height
export const hp = (percent) => (height * percent) / 100;

// device type detection
export const isTablet = () => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  return adjustedWidth >= 1000 || adjustedHeight >= 1000;
};
