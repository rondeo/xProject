import React from "react";
import styles from "./TelephoneInputStyle";
import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { DropDown, TextAreaInput } from "js/UIElements";
import { colors } from "js/UIElements/colors";
import countryData from "js/Resources/countries.json";

import _ from "lodash";

const getCountryCodes = () => {
  const coutries = _.sortBy(_.uniqBy(countryData, "dialCode"), item => {
    return parseInt(item.dialCode);
  });
  return _.map(coutries, item => {
    return { value: item.dialCode, label: `+${item.dialCode}` };
  });
};

const TelephoneType = [
  { value: "work", label: "Work" },
  { value: "office", label: "Office" },
  { value: "home", label: "Home" }
];

class TelephoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "" };
  }

  updateFieldValue = params => {
    let param = {};
    param[this.props.name] = { ...this.props.value, ...params };
    this.props.updateFieldValue(param);
    if (this.state.error != "") {
      this.setState({ error: "" });
    }
  };

  removeField = () => {
    let param = {};
    param[this.props.name] = {};
    this.props.updateFieldValue(param);
  };

  render() {
    const { showRemove, label, labelStyle, value } = this.props;
    const { error, disabled } = this.state;
    const telephoneCodes = getCountryCodes();
    return (
      <View style={styles.container}>
        {!!label ? (
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        ) : null}

        <View style={styles.containerTelephone}>
          <DropDown
            options={TelephoneType}
            value={value.type}
            name="type"
            updateFieldValue={this.updateFieldValue}
            containerCustomStyle={styles.telephoneTypeContainer}
            defaultValue={TelephoneType[0].value}
          />

          <DropDown
            options={telephoneCodes}
            value={value.code}
            name="code"
            updateFieldValue={this.updateFieldValue}
            containerCustomStyle={styles.countryCodeTypeContainer}
            inputContainerCustomStyle={styles.countryCodeTypeInputContainer}
            defaultValue={"1"}
          />

          <TextAreaInput
            containerCustomStyle={styles.inputContainer}
            value={value.number}
            inputTextCustomStyle={styles.inputText}
            name="number"
            updateFieldValue={this.updateFieldValue}
            keyboardType={"phone-pad"}
          />
        </View>
        {showRemove && (
          <View style={styles.removeViewContainer}>
            <TouchableWithoutFeedback onPress={() => this.removeField()}>
              <Text style={styles.removeView}>{`Remove`}</Text>
            </TouchableWithoutFeedback>
          </View>
        )}
        {!!error && !disabled ? (
          <View style={[styles.errorView, errorViewStyle]}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

TelephoneInput.defaultProps = {
  showRemove: false
};

export default TelephoneInput;
