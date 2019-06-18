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
  itemYyyyContainer: {
    width: "45%"
  },
  securityContainer: {
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "45%"
  },
  securityCodeContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },

  label: {
    fontSize: 14,
    ...fontStyle.medium,
    color: colors.dustyGray,
    paddingLeft: 0,
    marginBottom: 4,
    width: "100%"
  },
  rowItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 32
  },
  cardTitle: {
    ...fontStyle.regular,
    fontSize: 12,
    color: colors.charcoal,
    marginRight: 4,
    width: "50%"
  },
  preferedContainer: {
    width: "50%"
  },

  customeCheckboxTitleStyle: {
    fontSize: 12,
    ...fontStyle.regular,
    color: colors.charcoal,
    marginBottom: 6,
    flexShrink: 0,
    width: "100%"
  },

  expDateSecurityCodeContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "space-between"
  },
  expriedDateContainer: {
    flexDirection: "column",
    width: "55%",
    marginRight: 8
  },
  expriedDateTextContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cvvItemContainer: {
    width: "60%"
  },
  cvvIcon: {
    marginLeft: 8,
    alignSelf: "center"
  }
});

export default styles;
