import { Dimensions, Platform } from "react-native";

export const isIPhoneXSize = dim => {
  return dim.height == 812 || dim.width == 812;
};

export const isIPhoneXsSize = dim => {
  return dim.height == 896 || dim.width == 896;
};

export const isIphoneX = () => {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (isIPhoneXSize(dim) || isIPhoneXsSize(dim))
  );
};
