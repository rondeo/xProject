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
  hintContainer: {
    position: "absolute",
    right: 5
  },
  itemContainerTelephone: {
    marginBottom: 5
  },
  containerRadioButton: {
    flexDirection: "column",
    marginBottom: 10
  },
  radioButtonContainer: {
    width: "100%",
    flexDirection: "row"
  },
  radioStyleUnselected: {
    marginRight: 12,
    alignSelf: "flex-start"
  }
});
export default styles;
