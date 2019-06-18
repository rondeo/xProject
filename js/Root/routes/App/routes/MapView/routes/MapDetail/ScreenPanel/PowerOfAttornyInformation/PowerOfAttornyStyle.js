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
  addressContainer: {
    width: "100%",
    marginBottom: 24,
    flexDirection: "column"
  },
  DocuSignContainer: {
    width: "50%",
    marginBottom: 24,
    flexDirection: "row"
  },

  cityDetailContainer: {
    width: "100%",
    flexDirection: "row"
  },
  cityNameContainer: {
    width: "50%"
  },
  stateContainer: {
    width: "25%"
  },
  zipCodeContainer: {
    width: "25%"
  },
  addressInputContainer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  cityNameInputContainer: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  portItemContainer: {
    marginBottom: 16
  },
  addMoreContainer: {
    flexDirection: "row",
    width: "100%",
    marginLeft: 15,
    alignItems: "center"
  },

  addMore: {
    padding: 5,
    color: colors.dodgerBlue,
    ...fontStyle.regular
  }
});
export default styles;
