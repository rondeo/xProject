import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./AddCreditCardInformationStyle";
import { CheckBox, TextAreaInput } from "js/UIElements";
import { HelpIconSvg } from "js/UIElements/SvgImages";
import _ from "lodash";

class AddCreditCardInformation extends Component {
  render() {
    const {
      updateFieldValue,
      value: { fullName, cardNumber, preferred, cvv, expMonth, expYear }
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.rowItemContainer}>
          <Text numberOfLines={1} style={styles.cardTitle}>
            {"CREDITCARD INFORMATION"}
          </Text>

          <CheckBox
            isCircle={true}
            name={"preferred"}
            label={"Preferred Method"}
            containerCustomStyle={styles.preferedContainer}
            value={preferred}
            labelNumberOfLines={1}
            updateFieldValue={updateFieldValue}
          />
        </View>

        <TextAreaInput
          label={"FULL NAME"}
          updateFieldValue={updateFieldValue}
          name={"fullName"}
          value={fullName}
          placeholder={"Exactly as appears on the Credit Card"}
          containerCustomStyle={styles.itemContainer}
        />
        <TextAreaInput
          label={"CARD NUMBER"}
          updateFieldValue={updateFieldValue}
          name={"cardNumber"}
          value={cardNumber}
          placeholder={"Exactly as appears on the Credit Card"}
          keyboardType={"number-pad"}
          containerCustomStyle={styles.itemContainer}
        />

        <View style={styles.expDateSecurityCodeContainer}>
          <View style={styles.expriedDateContainer}>
            <Text numberOfLines={1} style={styles.label}>
              {"EXPIRED DATE"}
            </Text>
            <View style={styles.expriedDateTextContainer}>
              <TextAreaInput
                updateFieldValue={updateFieldValue}
                name={"expMonth"}
                value={expMonth}
                placeholder={"MM"}
                keyboardType={"number-pad"}
                maxLength={2}
                containerCustomStyle={styles.itemYyyyContainer}
              />
              <TextAreaInput
                name={"expYear"}
                value={expYear}
                placeholder={"YYYY"}
                maxLength={2}
                keyboardType={"number-pad"}
                updateFieldValue={updateFieldValue}
                containerCustomStyle={styles.itemYyyyContainer}
              />
            </View>
          </View>

          <View style={styles.securityContainer}>
            <Text numberOfLines={1} style={styles.label}>
              {"SECURITY CODE"}
            </Text>

            <View style={styles.securityCodeContainer}>
              <TextAreaInput
                updateFieldValue={updateFieldValue}
                name={"cvv"}
                value={cvv}
                keyboardType={"number-pad"}
                maxLength={3}
                containerCustomStyle={styles.cvvItemContainer}
              />
              <View style={styles.cvvIcon}>
                <HelpIconSvg height={16} width={16} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default AddCreditCardInformation;
