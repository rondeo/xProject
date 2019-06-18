import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./AddBankInformationStyle";
import { VisaCard, ACHCard, CheckBox, TextAreaInput } from "js/UIElements";
import _ from "lodash";

const CHECK_BOXES = [
  {
    name: "SAVINGS",
    label: "Savings"
  },
  {
    name: "CHECKING",
    label: "Checking"
  }
];

const PaymentInfo = [
  {
    name: "fullName",
    label: "NAME OF ACCOUNT",
    placeholder: "Enter Account Holder Name",

    keyboardType: "default"
  },
  {
    name: "bankName",
    label: "BANK NAME",
    placeholder: "Enter Bank Name",

    keyboardType: "default"
  },
  {
    name: "accountNumber",
    label: "ACCOUNT NUMBER",
    placeholder: "Enter Account Number",

    keyboardType: "number-pad"
  },
  {
    name: "routingNumber",
    label: "BANK ROUTING NUMBER",
    placeholder: "Enter Bank Touting Number",

    keyboardType: "default"
  },
  {
    name: "bankCity",
    label: "BANK CITY/STATE",
    placeholder: "Enter Bank City/State",

    keyboardType: "default"
  }
];

class AddBankInformation extends Component {
  render() {
    const { updateFieldValue, value } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.rowItemContainer}>
          <Text numberOfLines={1} style={styles.cardTitle}>
            {"ACH INFORMATION"}
          </Text>

          <CheckBox
            isCircle={true}
            name={"preferred"}
            label={"Preferred Method"}
            containerCustomStyle={styles.preferedContainer}
            value={value.preferred}
            labelNumberOfLines={1}
            updateFieldValue={updateFieldValue}
          />
        </View>

        <View style={styles.checkBoxesContainer}>
          {_.map(CHECK_BOXES, item => {
            const checkBoxValue = _.get(value, item.name, false);
            return (
              <CheckBox
                key={item.name}
                name={item.name}
                label={item.label}
                value={checkBoxValue}
                updateFieldValue={updateFieldValue}
                containerCustomStyle={styles.checkBoxContainer}
                titleCustomStyle={styles.customeCheckboxTitleStyle}
              />
            );
          })}
        </View>
        {_.map(PaymentInfo, item => {
          const paymentInfoValue = _.get(value, item.name, false);
          return (
            <TextAreaInput
              key={item.name}
              label={item.label}
              updateFieldValue={updateFieldValue}
              name={item.name}
              value={paymentInfoValue}
              placeholder={item.placeholder}
              containerCustomStyle={styles.itemContainer}
              keyboardType={item.keyboardType}
            />
          );
        })}
      </View>
    );
  }
}

export default AddBankInformation;
