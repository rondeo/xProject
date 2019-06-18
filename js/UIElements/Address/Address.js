import React from "react";
import { View } from "react-native";
import { TextAreaInput, DropDown } from "js/UIElements";
import styles from "./AddressStyle";
import { getCountriesNames } from "js/Services";

class Address extends React.Component {
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

  render() {
    const {
      value: { address1, city, state, zipcode, country = "us" }
    } = this.props;
    const countriesName = getCountriesNames();
    return (
      <View style={styles.container}>
        <TextAreaInput
          label={"BUSINESS ADDRESS"}
          updateFieldValue={this.updateFieldValue}
          inputTextCustomStyle={styles.addressInputContainer}
          name={"address1"}
          value={address1}
          placeholder={"Enter Address Here..."}
        />
        <View style={styles.cityDetailContainer}>
          <TextAreaInput
            containerCustomStyle={styles.cityNameContainer}
            inputTextCustomStyle={styles.cityNameInputContainer}
            updateFieldValue={this.updateFieldValue}
            name={"city"}
            value={city}
            placeholder={"City"}
          />
          <TextAreaInput
            containerCustomStyle={styles.stateContainer}
            inputTextCustomStyle={styles.stateInputContainer}
            updateFieldValue={this.updateFieldValue}
            name={"state"}
            placeholder={"State"}
            value={state}
          />
          <TextAreaInput
            containerCustomStyle={styles.zipCodeContainer}
            inputTextCustomStyle={styles.zipCodeInputContainer}
            updateFieldValue={this.updateFieldValue}
            name={"zipcode"}
            value={zipcode}
            placeholder={"Zipcode"}
            textContentType={"postalCode"}
            keyboardType={"number-pad"}
          />
        </View>
        <DropDown
          options={countriesName}
          updateFieldValue={this.updateFieldValue}
          inputContainerCustomStyle={styles.countryDropDownInputStyle}
          name={"country"}
          value={country}
          defaultValue={"us"}
        />
      </View>
    );
  }
}

export default Address;
