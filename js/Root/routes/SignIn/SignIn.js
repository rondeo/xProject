import React, { Component } from "react";
import styles from "./SignInStyle";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { TextAreaInput, CheckBox, FullScreenLoader } from "js/UIElements";
import { EyeIconSvg } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";
import { updateFieldValue, initScreen } from "js/modules/screenDetailModule";
import { signInAccount } from "js/modules/loginModule";
const ScreenName = "SignIn";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { showPassword: false };
  }
  componentWillMount = () => {
    const { initScreen } = this.props;
    initScreen({ screenName: ScreenName });
  };

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  updateFieldValue = params => {
    const { updateFieldValue } = this.props;
    updateFieldValue({ data: params, screenName: ScreenName });
  };

  onSignInClick = () => {
    const { signInAccount } = this.props;
    signInAccount();
  };

  onForgotPasswordClick = () => {};

  onSignUpClick = () => {
    const { navigate } = this.props.navigation;
    navigate("signUp");
  };

  render() {
    const {
      data: { email, password, rememberMe },
      isLoading
    } = this.props;
    const { showPassword } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text style={styles.headerText}>{`Login`}</Text>
          <View style={styles.innerContainer}>
            <TextAreaInput
              label={"USER NAME"}
              containerCustomStyle={styles.textBoxItemContainer}
              updateFieldValue={this.updateFieldValue}
              name={"email"}
              value={email}
              textContentType={"name"}
              placeholder={"Enter your email or username"}
            />
            <TextAreaInput
              label={"PASSWORD"}
              containerCustomStyle={styles.textBoxItemContainer}
              updateFieldValue={this.updateFieldValue}
              name={"password"}
              value={password}
              secureTextEntry={!showPassword}
              textContentType={"password"}
              placeholder={"**********"}
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
            {/*<CheckBox
              name={"rememberMe"}
              label={"Remember Me"}
              value={rememberMe}
              updateFieldValue={this.updateFieldValue}
              containerCustomStyle={styles.checkBoxContainer}
            />*/}
          </View>
          <TouchableOpacity
            onPress={this.onSignInClick}
            style={styles.signInButton}
            activeOpacity={0.8}
          >
            <Text style={styles.signInText}>{`SIGN IN`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onForgotPasswordClick}
            style={styles.forgotPasswordContainer}
            activeOpacity={0.8}
          >
            <Text
              style={styles.forgotPasswordText}
            >{`Forgot Username / Password?`}</Text>
          </TouchableOpacity>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>{`Don't have an account?`}</Text>
            <TouchableOpacity
              onPress={this.onSignUpClick}
              style={styles.signUpButtonContainer}
              activeOpacity={0.8}
            >
              <Text style={styles.signUpButtonText}>{`Sign up!`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.copyRightText}>
            {`© 2018 KlearExpress, Inc.`}
          </Text>
        </View>
        {!!isLoading && <FullScreenLoader />}
      </View>
    );
  }
}

const mapActionCreators = { updateFieldValue, initScreen, signInAccount };

const mapStateToProps = state => {
  return {
    data: state.screenDetail[ScreenName] || {},
    isLoading: state.login.isLoading
  };
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(SignIn);
