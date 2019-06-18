import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
const styles = StyleSheet.create({
  container: {
    width: 225,
    // height: 180,

    borderRadius: 8,
    backgroundColor: colors.white,

    overflow: "hidden"
  },
  topImage: {
    width: "100%",
    height: 84,
    backgroundColor: colors.whitesmoke
  },
  detailContainer: {
    width: "100%",
    padding: 8,
    flexDirection: "column"
  },
  driverDetailContainer: {
    width: "100%",
    marginBottom: 6,
    flexDirection: "column"
  },
  titleText: {
    fontSize: 12,
    ...fontStyle.bold,
    color: colors.black,
    marginBottom: 4
  },
  containerNumberText: {
    fontSize: 10,
    color: colors.dustyGray,
    ...fontStyle.regular
  },
  addressContainer: {
    width: "100%",
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center"
  },

  addressLabelText: {
    fontSize: 10,
    color: colors.dustyGray,
    flexBasis: "15%",
    ...fontStyle.regular
  },
  addressText: {
    flexBasis: "85%",
    fontSize: 10,
    color: colors.black,
    ...fontStyle.regular
  },
  timeContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  timeLabelText: {
    fontSize: 10,
    color: colors.dustyGray,
    flexBasis: "15%",
    ...fontStyle.regular
  },
  timeText: {
    flexBasis: "85%",
    fontSize: 10,
    color: colors.black,
    ...fontStyle.regular
  }
});

export default styles;
