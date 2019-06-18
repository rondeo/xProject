import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./DrawerHeaderStyle";
import { CloseIconSvg } from "js/UIElements/SvgImages";
import { colors } from "js/UIElements/colors";
import logo from "js/Images/logo.png";

class DrawerHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.props.onClosePress()}>
          <View style={styles.headerLeft}>
            <CloseIconSvg fill={colors.white} width={16} height={16} />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.headerTitleContainer}>
          <Image
            source={logo}
            style={{ width: 150, height: 40, resizeMode: "contain" }}
          />
        </View>
      </View>
    );
  }
}

export default DrawerHeader;
