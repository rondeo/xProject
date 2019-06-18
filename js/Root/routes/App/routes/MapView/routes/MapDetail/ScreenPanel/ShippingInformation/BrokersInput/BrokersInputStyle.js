import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
import { RadioButton } from "../index";
import React from "react";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column"
  },
  containerBroker: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 16
  },
  rowLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 6
  },
  label: {
    fontSize: 14,
    ...fontStyle.medium,
    color: colors.dustyGray,
    width: "25%"
  },
  radioButtonContainer: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  radioButton: {
    marginRight: 4,
    alignSelf: "flex-start"
  },

  inputContainer: {
    width: "100%"
  },

  removeViewContainer: {
    padding: 5,
    width: "100%",
    color: colors.dodgerBlue,
    alignItems: "flex-end"
  },
  removeView: {
    color: colors.dodgerBlue,
    ...fontStyle.regular,
    fontSize: 12,
    textAlign: "right"
  },
  nameInputText: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  emailInputText: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0
  }
});
export default styles;
