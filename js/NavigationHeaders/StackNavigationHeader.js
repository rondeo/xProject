import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  TextInput
} from "react-native";
import { HEADER_HEIGHT } from "js/static";
import styles from "./Styles";

import _ from "lodash";
import { colors } from "../UIElements/colors";

var RCTUIManager = require("NativeModules").UIManager;

let animatedValue = new Animated.Value(0);

const animateDown = () => {
  Animated.timing(animatedValue, {
    toValue: 1,
    duration: 400,
    easing: Easing.ease
  }).start();
};
const animateUp = () => {
  Animated.timing(animatedValue, {
    toValue: 0,
    duration: 400,
    easing: Easing.ease
  }).start();
};

const headerStyle = ({ navigation, color }) => {
  const params = navigation.state.params;
  const isScroll = _.get(params, `isScroll`, false);
  const isFixHeader = _.get(params, "isFixHeader", false);
  const customHeaderStyle = _.get(params, "customHeaderStyle", {});
  const backgroundColor = _.get(params, "color", color);
  return {
    backgroundColor: backgroundColor ? backgroundColor : `rgba(0,0,0,0)`,
    height: HEADER_HEIGHT,
    elevation: isScroll && !isFixHeader ? 0.5 : 0,
    shadowColor: isScroll && !isFixHeader ? null : "transparent",
    paddingTop: 0,
    marginTop: 0,
    borderBottomWidth: 0,
    ...customHeaderStyle
  };
};

const headerLeft = ({ navigation, screenProps }) => {
  const params = navigation.state.params;

  const component = _.get(params, "leftComponent", null);
  const onPressLeft = () => {
    Keyboard.dismiss();
    if (component && params && params.customOnHeaderLeftClick) {
      params.customOnHeaderLeftClick();
    } else {
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity onPress={() => onPressLeft()} activeOpacity={0.8}>
      <View style={styles.headerLeftContainer}>{component}</View>
    </TouchableOpacity>
  );
};

const headerRight = ({ navigation }) => {
  const params = navigation.state.params;
  const nextRoute = _.get(params, "nextRoute", "");
  const component = _.get(params, "rightComponent", null);
  const onPressRight = () => {
    Keyboard.dismiss();
    if (component && params && params.customOnHeaderRightClick) {
      params.customOnHeaderRightClick();
    } else {
      navigation.navigate(nextRoute);
    }
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => onPressRight()}>
        <View style={styles.headerRightContainer}>{component}</View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const headerTitle = ({ navigation }) => {
  const params = navigation.state.params;
  const component = _.get(params, "centerComponent", null);
  return <View style={styles.headerTitleContainer}>{component}</View>;
};

const StackNavigationHeader = {
  headerRight,
  headerLeft,
  headerStyle,
  headerTitle
};

export default StackNavigationHeader;
