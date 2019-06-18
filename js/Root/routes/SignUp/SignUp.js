import React, { Component } from "react";
import styles from "./SignUpStyle";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { TextAreaInput, FullScreenLoader } from "js/UIElements";
import SignUpConfirmation from "./SignUpConfirmation";
import { updateFieldValue, initScreen } from "js/modules/screenDetailModule";
import { createAccount } from "js/modules/loginModule";

const ScreenName = "SignUp";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { isDone: false };
  }

  componentWillMount = () => {
    const { initScreen } = this.props;
    initScreen({ screenName: ScreenName });
  };

  updateFieldValue = params => {
    const { updateFieldValue } = this.props;
    updateFieldValue({ data: params, screenName: ScreenName });
  };

  onSignUpClick = () => {
    const { createAccount } = this.props;
    createAccount({
      successCallBack: () => {
        console.log("Create Successfully");
        this.setState({ isDone: true });
      }
    });
  };

  onCancelClick = () => {
    const { navigate } = this.props.navigation;
    navigate("signIn");
  };

  render() {
    const {
      data: { companyName, email, contactName },
      isLoading,
      navigation
    } = this.props;

    const { isDone } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text style={styles.headerText}>{`Sign me up!`}</Text>
          <Text
            style={styles.headerSubText}
          >{`Provide us your basic information by filling the form bellow.`}</Text>
          <View style={styles.innerContainer}>
            <TextAreaInput
              label={"COMPANY NAME"}
              containerCustomStyle={styles.textBoxItemContainer}
              updateFieldValue={this.updateFieldValue}
              name={"companyName"}
              value={companyName}
            />
            <TextAreaInput
              label={"EMAIL"}
              containerCustomStyle={styles.textBoxItemContainer}
              updateFieldValue={this.updateFieldValue}
              name={"email"}
              value={email}
              keyboardType={"email-address"}
            />
            <TextAreaInput
              label={"CONTACT NAME"}
              containerCustomStyle={styles.textBoxItemContainer}
              updateFieldValue={this.updateFieldValue}
              name={"contactName"}
              value={contactName}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this.onCancelClick}
              style={styles.cancelButton}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelButtonText}>{`Cancel`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onSignUpClick}
              style={styles.signUpButton}
              activeOpacity={0.8}
            >
              <Text style={styles.signUpButtonText}>{`SIGN UP`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.copyRightText}>
            {`© 2018 KlearExpress, Inc.`}
          </Text>
        </View>
        {!!isLoading && <FullScreenLoader />}
        {!!isDone && <SignUpConfirmation navigation={navigation} />}
      </View>
    );
  }
}

const mapActionCreators = { updateFieldValue, initScreen, createAccount };

const mapStateToProps = state => {
  return {
    data: state.screenDetail[ScreenName] || {},
    isLoading: state.login.isLoading
  };
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(SignUp);
