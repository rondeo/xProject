import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexShrink: 0,
    borderRadius: 4,
    backgroundColor: colors.whitesmoke,
    padding: 24,
    marginBottom: 24
  },
  itemContainer: {
    marginBottom: 24
  },

  rowItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16
  },

  checkBoxesContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16
  },

  cardTitle: {
    ...fontStyle.regular,
    fontSize: 12,
    color: colors.charcoal,
    width: "50%"
  },
  preferedContainer: {
    alignSelf: "flex-start",
    width: "50%"
  },

  customeCheckboxTitleStyle: {
    fontSize: 12,
    ...fontStyle.regular,
    color: colors.charcoal
  },

  checkBoxContainer: {
    width: 80
  }
});
export default styles;
