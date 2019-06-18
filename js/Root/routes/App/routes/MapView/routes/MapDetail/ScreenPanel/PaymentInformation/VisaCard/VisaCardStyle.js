import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: colors.whitesmoke,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    borderColor: colors.silverChalice,
    borderRadius: 5,
    elevation: 3,
    marginBottom: 16
  },
  cardTitle: {
    ...fontStyle.regular,
    fontSize: 12,
    color: colors.charcoal,
    marginBottom: 8
  },
  visaCard: {
    height: 36,
    width: 120,
    marginBottom: 20
  },
  cardHolderContainer: {
    marginBottom: 12
  },
  cardHolderName: {
    ...fontStyle.medium,
    fontSize: 14,
    color: colors.black
  },
  cardExpDate: {
    ...fontStyle.medium,
    fontSize: 14,
    color: colors.black,
    letterSpacing: 1
  },
  cardCVVNumber: {
    ...fontStyle.medium,
    fontSize: 14,
    color: colors.black,
    letterSpacing: 3
  },
  cardHolderNumber: {
    ...fontStyle.medium,
    fontSize: 14,
    color: colors.black,
    letterSpacing: 3
  },
  cardHolderTitle: {
    ...fontStyle.regular,
    fontSize: 12,
    color: colors.charcoal
  },
  cvvContainer: {
    position: "absolute",
    right: 5,
    width: 80
  },
  preferedContainer: {
    position: "absolute",
    right: 5,
    width: 80
  },
  cardInfoContainer: {
    width: "100%"
  }
});
export default styles;
