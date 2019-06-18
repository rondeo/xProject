import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 24,
    flexDirection: "column"
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
  countryDropDownInputStyle: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  zipCodeInputContainer: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0
  },
  stateInputContainer: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0
  }
});
export default styles;
