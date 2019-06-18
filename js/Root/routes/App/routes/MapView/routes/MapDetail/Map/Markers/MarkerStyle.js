import { StyleSheet, Dimensions, Platform } from "react-native";

import { colors } from "js/UIElements/colors";
import { relative } from "path";

const styles = StyleSheet.create({
  marker: {
    flexShrink: 0,
    height: Platform.OS == "ios" ? 0 : 300,
    justifyContent: "flex-end",
    alignItems: "center"
  },

  markerContainerIos: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1
  },
  markerContainer: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    width: 225
  },
  arrowContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center"
  },
  shipmentInfoIosCard: {
    left: -100,
    width: 225,
    position: "absolute",
    bottom: 34,
    zIndex: 50
  },
  shipmentInfoCard: {
    width: 225,
    position: "absolute",
    bottom: 34,
    zIndex: 50
  }
});
export default styles;
