import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 32
    // backgroundColor: "rgba(255,255,255,0.8)"
  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16
  },
  titleTextContainer: {
    flexDirection: "column",
    width: "100%",
    marginLeft: 16
  },
  titleText: {
    fontSize: 16,
    color: colors.black,
    height: 20,
    ...fontStyle.bold
  },
  subTitleTextContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  subTitleText1: {
    fontSize: 12,
    color: colors.silverChalice,
    ...fontStyle.regular,
    width: 30
  },
  subTitleText2: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    ...fontStyle.regular
  },
  statusIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.butterCup,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  addressContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40
  },
  originAddressContainer: {
    flexDirection: "column"
  },
  destinationAddressContainer: {
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  originAddressLabel: {
    fontSize: 12,
    color: colors.silverChalice,
    ...fontStyle.regular,
    marginBottom: 4
  },
  originAddressText: {
    fontSize: 14,
    color: colors.black,
    ...fontStyle.medium
  },
  originTimeText: {
    fontSize: 12,
    color: colors.mineshaft,
    ...fontStyle.light,
    fontStyle: "italic"
  },
  destinationAddressLabel: {
    textAlign: "right",
    fontSize: 12,
    color: colors.silverChalice,
    ...fontStyle.regular,
    marginBottom: 4
  },
  destinationAddressText: {
    textAlign: "right",
    fontSize: 14,
    color: colors.black,
    ...fontStyle.medium
  },
  destinationTimeText: {
    textAlign: "right",
    fontSize: 12,
    color: colors.mineshaft,
    ...fontStyle.light,
    fontStyle: "italic"
  }
});

export default styles;
