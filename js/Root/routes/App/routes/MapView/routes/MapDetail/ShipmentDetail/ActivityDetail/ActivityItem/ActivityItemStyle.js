import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexShrink: 0,
    marginBottom: 32
  },
  itemHolderMainH: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 24
  },
  itemHolderMainL: {
    flexDirection: "column",
    flex: 1
  },
  noteContainer: {
    width: "100%",
    flexDirection: "row"
  },
  titleText: {
    flex: 1,
    ...fontStyle.bold,
    color: colors.black,
    fontSize: 14,
    marginBottom: 5
  },
  optionTitleText: {
    flex: 1,
    color: colors.black,
    fontSize: 12
  },
  itemHolderInner1: {
    marginRight: 20,
    width: 30,
    alignItems: "center"
  },
  stepNumberContainer: {
    borderRadius: 12,
    height: 24,
    width: 24,
    backgroundColor: colors.christi,
    alignItems: "center",
    justifyContent: "center"
  },
  dots: {
    marginTop: 5,
    borderRadius: 10,
    height: 10,
    width: 10,
    marginRight: 15,
    backgroundColor: colors.black
  },
  stepNumberText: {
    textAlign: "center",

    ...fontStyle.medium,
    color: colors.white,
    fontSize: 16
  },
  dateText: {
    color: colors.mineshaft,
    ...fontStyle.light,
    fontStyle: "italic",
    fontSize: 12,
    marginBottom: 5
  },

  buttonContainer: {
    marginTop: 16,
    paddingLeft: 24,
    flexDirection: "row"
  },
  buttonView: {
    color: colors.dodgerBlue,
    ...fontStyle.bold
  },
  buttonItem: {
    borderColor: colors.dodgerBlue,
    marginRight: 24
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white
  },

  text_number: {
    alignItems: "center",
    paddingTop: 6
  },
  cardBox: {
    maxWidth: 230,
    marginBottom: 10,
    marginTop: 10,
    flexShrink: 0,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.white,
    borderColor: colors.silver,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    padding: 8,
    alignItems: "center"
  },
  packListItem: {
    width: viewportWidth - 32,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    marginRight: 16
  },

  packListItemInnerContainer: {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.silver,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5
  },
  brokerNameContainer: {
    marginLeft: 16,
    flexDirection: "column",
    flex: 1
  },
  textBrokerName: {
    fontSize: 16,
    ...fontStyle.bold,
    color: colors.black,
    marginBottom: 8
  },
  viewProfileText: {
    fontSize: 16,
    ...fontStyle.bold,
    color: colors.dodgerBlue
  },
  imageUserProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },

  packageListDetailContainer: {
    flexDirection: "column",
    marginLeft: 8
  },
  columnItem: {
    flexDirection: "column",
    padding: 16
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  logo: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginRight: 10
  },
  logoTextAbove: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  },
  logoTextBelow: {
    fontSize: 12,
    ...fontStyle.light
  },
  containers: {
    flexDirection: "row",
    marginBottom: 8,
    width: "100%",

    alignItems: "center"
  },
  containerText: {
    maxWidth: 60,
    fontSize: 12,
    ...fontStyle.regular,
    color: colors.silverChalice
  },
  containerCode: {
    borderWidth: 1,
    borderColor: colors.dodgerBlue,
    fontSize: 14,
    borderRadius: 4,
    padding: 4,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  containerCodeText: {
    fontSize: 14,
    ...fontStyle.regular,
    color: colors.dodgerBlue
  },
  containerImage: {
    width: "100%",
    height: 130,
    borderRadius: 5,
    backgroundColor: colors.silverChalice,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5
  },
  driverView: {
    flexDirection: "row",
    marginTop: 10
  },
  driverText: {
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    ...fontStyle.regular,
    color: colors.silverChalice,
    maxWidth: 50
  },
  driverNameView: {
    flexDirection: "column"
  },
  driverName: {
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
    ...fontStyle.light,
    color: colors.black
  },
  driverNumber: {
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
    ...fontStyle.light,
    color: colors.black
  },
  borderView: {
    borderTopWidth: 1,
    height: 2,
    width: "100%",
    borderTopColor: "#9E9E9E",
    marginTop: 10
  },
  contactInfoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderTopWidth: 1,
    borderColor: colors.silver
  },
  contactInfo: {
    maxWidth: 150,
    borderWidth: 1,
    borderColor: colors.black,
    fontSize: 14,
    borderRadius: 4,
    color: colors.black,
    textAlign: "center",
    padding: 8,
    ...fontStyle.regular
  },
  paginationContainer: {
    paddingVertical: 8
  },

  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.dodgerBlue
  },
  inactiveDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.dodgerBlue,
    backgroundColor: colors.white
  },
  carouselContainer: {
    width: "100%",
    flexDirection: "column",
    zIndex: 10,
    justifyContent: "center"
  }
});
export default styles;
