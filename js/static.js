import { Platform, StyleSheet, Dimensions } from "react-native";
import { colors } from "./UIElements/colors";

export const prefix = "klearExpress://";
const { width, height } = Dimensions.get("window");

export const debug = __DEV__ ? true : false;
export const codePush = __DEV__ ? false : true;
export const googleAnalytics = __DEV__ ? false : true;
export const rethumbUrl = "https://cloud.klearexpressapp.com/thumber";
export const HEADER_HEIGHT = 52;
export const TAB_BAR_HEIGHT = 56;
export const STATUS_BAR_HEIGHT = Platform.OS == "android" ? 24 : 20;
export const STATUS_BAR_OFFSET =
  Platform.OS == "android" ? STATUS_BAR_HEIGHT : 0;
export const HEADER_PADDING_TOP =
  Platform.OS == "android" ? 0 : STATUS_BAR_HEIGHT;
export const HEADER_TITLE_HEIGHT = 40;
export const HEADER_TITLE_PADDING_BOTTOM = STATUS_BAR_OFFSET;
export const SCREEN_MIN_HEIGHT =
  height + HEADER_TITLE_HEIGHT - HEADER_TITLE_PADDING_BOTTOM;
export const SCREEN_SCROLL_STOP_THRESHOLD = HEADER_TITLE_HEIGHT;

export const SERVER_URL = debug
  ? "https://api-dev.klearexpress.com/v1/events"
  : "https://api-dev.klearexpress.com/v1/events";

export const USE_HEADER_TOGGLE = false; //Platform.OS == 'ios' ?true:false;

export const fontStyle = {
  light: {
    ...Platform.select({
      ios: {
        width: "100%",
        fontFamily: "Helvetica-Light"
      },
      android: {
        width: "100%",
        fontFamily: "sans-serif-light"
      }
    })
  },
  regular: {
    ...Platform.select({
      ios: {
        width: "100%",
        fontFamily: "Helvetica",
        fontWeight: "400"
      },
      android: { width: "100%", fontFamily: "sans-serif", fontWeight: "400" }
    })
  },
  medium: {
    ...Platform.select({
      ios: {
        width: "100%",
        fontFamily: "Helvetica Neue",
        fontWeight: "500"
      },
      android: {
        width: "100%",
        fontFamily: "sans-serif-medium",
        fontWeight: "100"
      }
    })
  },
  bold: {
    ...Platform.select({
      ios: { width: "100%", fontFamily: "Helvetica-Bold", fontWeight: "bold" },
      android: {
        width: "100%",
        fontFamily: "sans-serif-medium",
        fontWeight: "500"
      }
    })
  }
};

export const COLOR_MAP = {
  green: colors.christi,
  red: colors.monza,
  orange: colors.butterCup,
  grey: colors.silver
};
