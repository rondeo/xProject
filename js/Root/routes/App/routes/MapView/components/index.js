import React from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "react-navigation";
import { StackNavigationHeader, styles } from "js/NavigationHeaders";
import { MapDetail } from "../routes";
import { screenChange } from "js/modules/navigationModule";
import { navigateOnce } from "js/Services";
import { Header } from "react-navigation";
import { isIphoneX } from "js/Services";
import { transitionConfig } from "js/CommonStylesAndUtils/StackNavigationScreenUtils";
import { SearchIconSvg } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";

import _ from "lodash";

const MapNavigator = createStackNavigator(
  {
    mapDetail: {
      screen: MapDetail,
      path: "mapDetail",
      navigationOptions: ({ navigation, screenProps }) => {
        return {
          headerStyle: StackNavigationHeader.headerStyle({
            navigation,
            screenProps
          }),
          headerLeft: StackNavigationHeader.headerLeft({
            navigation,
            screenProps
          }),
          headerLayoutPreset: "center",
          headerRight: StackNavigationHeader.headerRight({
            navigation,
            screenProps
          }),
          headerTitle: StackNavigationHeader.headerTitle({
            navigation,
            screenProps
          })
        };
      }
    }
  },
  {
    initialRouteName: "mapDetail",

    headerMode: "screen",
    transitionConfig
  }
);

MapNavigator.router.getStateForAction = navigateOnce(
  MapNavigator.router.getStateForAction
);

class MapViewComp extends React.Component {
  onStateChange = (prevState, currentState) => {
    this.props.screenChange(prevState, currentState, "mapView");
  };

  render() {
    return (
      <MapNavigator
        screenProps={{ onDrawerClick: this.props.screenProps.onDrawerClick }}
        onNavigationStateChange={this.onStateChange}
        ref={ref => (this.myNav = ref)}
      />
    );
  }
}

const mapActionCreators = {
  screenChange
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(MapViewComp);
