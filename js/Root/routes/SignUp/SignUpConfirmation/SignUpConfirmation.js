import React, { Component } from "react";
import styles from "./SignUpConfirmationStyle";
import { Image, Text, TouchableOpacity, View } from "react-native";
import signUpImage from "js/Images/signUp.png";
const ScreenName = "SignUpConfirmation";

class SignUpConfirmation extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    const { initScreen } = this.props;
    // initScreen({screenName: ScreenName});
  };
  onCancelClick = () => {
    const { navigate } = this.props.navigation;
    navigate("signIn");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text style={styles.headerText}>{`Thanks for information!`}</Text>
          <View style={styles.innerContainer}>
            <Image
              style={{ height: 150, width: "100%", resizeMode: "contain" }}
              source={signUpImage}
            />
          </View>

          <View style={styles.textBoxItemContainer}>
            <Text
              style={styles.headerSubText}
            >{`Thanks for signing up. We will shortly be sending you email to setup your account and onboard with our application. Applologies for delay!`}</Text>
            <Text
              style={styles.headerSubText2}
            >{`Please check you email inbox and make sure our email isn’t in your Junk folder.`}</Text>
          </View>
          <TouchableOpacity
            onPress={this.onCancelClick}
            style={styles.signInButton}
            activeOpacity={0.8}
          >
            <Text style={styles.signInText}>{`Okay`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignUpConfirmation;
