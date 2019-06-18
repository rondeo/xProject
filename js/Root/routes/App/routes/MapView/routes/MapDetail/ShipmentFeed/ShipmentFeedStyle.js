import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { HEADER_HEIGHT } from "js/static";
import { isIphoneX } from "js/Services";
const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - 75
};
const styles = StyleSheet.create({
  flatList: {
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: colors.white,
    height: "auto"
  }
});
export default styles;
