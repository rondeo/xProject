import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column"
  },
  label: {
    fontSize: 14,
    ...fontStyle.medium,
    color: colors.dustyGray,
    paddingLeft: 0,
    marginBottom: 6
  },
  imagePickerContainer: {
    height: 88,
    width: "100%",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.silver,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  selectLabel: {
    fontSize: 14,
    ...fontStyle.regular,
    color: colors.mineshaft,
    marginTop: 8,
    textAlign: "center",
    fontStyle: "italic"
  },
  image: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 4
  },
  imageLayer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  closeButtonCotainer: {
    position: "absolute",
    right: 0,
    top: 0,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default styles;
