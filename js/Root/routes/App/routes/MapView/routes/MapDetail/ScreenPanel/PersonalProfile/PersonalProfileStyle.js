import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexShrink: 0
  },
  itemContainer: {
    marginBottom: 24
  },
  togglePasswordButton: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  itemContainerTelephone: {
    marginBottom: 5
  },
  addMorePhoneContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },

  addMorePhone: {
    padding: 5,
    color: colors.dodgerBlue,
    ...fontStyle.regular
  }
});
export default styles;
