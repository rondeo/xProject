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

  errorInputContainer: {
    borderColor: colors.monza
  },
  inputText: {
    borderWidth: 1,
    borderColor: colors.silver,
    padding: 10,
    fontSize: 14,
    // ...fontStyle.regular,
    color: colors.mineshaft,
    borderRadius: 4,
    backgroundColor: colors.white
  },

  error: {
    fontSize: 13,
    ...fontStyle.regular,
    color: colors.monza
  },
  errorView: {
    marginTop: 6,
    height: 16
  },
  inputContainer: {
    width: "100%",
    position: "relative"
  },
  rightComponent: {
    position: "absolute",
    right: 0,
    width: 30,
    paddingRight: 10,
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center"
  }
});

export default styles;
