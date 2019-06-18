import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./PersonalProfileStyle";
import { ImagePicker, TelephoneInput, TextAreaInput } from "js/UIElements";
import { colors } from "js/UIElements/colors";
import { EyeIconSvg, LockIconSvg, PlusIconSvg } from "js/UIElements/SvgImages";
import _ from "lodash";

class PersonalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }

  componentWillMount = () => {
    const {
      initScreen,
      currentScreen,
      data: { telephoneNumbers }
    } = this.props;
    initScreen({ screenName: currentScreen });
    if (!telephoneNumbers) {
      this.addMorePhoneClick();
    }
  };

  updateTelephoneFieldValue = params => {
    const { updateFieldValue } = this.props;
    updateFieldValue({ telephoneNumbers: params });
  };

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  addMorePhoneClick = () => {
    const { telephoneNumbers = {} } = this.props.data;
    this.updateTelephoneFieldValue({
      [Object.keys(telephoneNumbers).length + 1]: {
        number: "",
        type: "work"
      }
    });
  };

  render() {
    const {
      data: {
        fullName = "",
        userName = "Shelly.Clarkson@bestclearance.com",
        password = "",
        additionEmail = "",
        logo = "",
        telephoneNumbers = {}
      } = {},
      updateFieldValue
    } = this.props;

    const { showPassword } = this.state;
    return (
      <View style={styles.container}>
        <TextAreaInput
          label={"FULL NAME"}
          containerCustomStyle={styles.itemContainer}
          updateFieldValue={updateFieldValue}
          name={"fullName"}
          value={fullName}
          textContentType={"name"}
        />
        <TextAreaInput
          label={"USER NAME"}
          containerCustomStyle={styles.itemContainer}
          updateFieldValue={updateFieldValue}
          name={"userName"}
          value={userName}
          textContentType={"username"}
          editable={false}
          rightComponent={<LockIconSvg />}
        />
        <TextAreaInput
          label={"PASSWORD"}
          containerCustomStyle={styles.itemContainer}
          updateFieldValue={updateFieldValue}
          name={"password"}
          value={password}
          secureTextEntry={!showPassword}
          textContentType={"password"}
          rightComponent={
            <TouchableWithoutFeedback onPress={this.togglePassword}>
              <View style={styles.togglePasswordButton}>
                <EyeIconSvg
                  width={14}
                  height={21}
                  fill={!showPassword ? colors.silver : colors.mineshaft}
                />
              </View>
            </TouchableWithoutFeedback>
          }
        />
        <TextAreaInput
          label={"ADDITIONAL EMAIL"}
          containerCustomStyle={styles.itemContainer}
          updateFieldValue={updateFieldValue}
          name={"additionEmail"}
          value={additionEmail}
          textContentType={"emailAddress"}
          keyboardType={"email-address"}
        />
        {_.map(Object.keys(telephoneNumbers), (key, index) => {
          const item = telephoneNumbers[key];
          const isEmpty = _.isEmpty(item);

          return (
            !isEmpty && (
              <TelephoneInput
                key={key}
                label={index == 0 ? "PHONE" : ""}
                containerCustomStyle={styles.itemContainerTelephone}
                value={item}
                textContentType={"phone"}
                name={key}
                updateFieldValue={this.updateTelephoneFieldValue}
                showRemove={index > 0}
              />
            )
          );
        })}

        <View style={styles.itemContainer}>
          <TouchableWithoutFeedback onPress={() => this.addMorePhoneClick()}>
            <View style={styles.addMorePhoneContainer}>
              <PlusIconSvg />
              <Text style={styles.addMorePhone}>{"Add More Phones"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ImagePicker
          label={"IMAGE / LOGO"}
          name={"logo"}
          value={logo}
          containerCustomStyle={styles.itemContainer}
          updateFieldValue={updateFieldValue}
        />
      </View>
    );
  }
}

export default PersonalProfile;
