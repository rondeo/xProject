import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.butterCup,
    alignItems: "center",
    justifyContent: "center"
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  border: {
    borderColor: colors.white,
    borderWidth: 1
  }
});
export default styles;
