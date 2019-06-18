import React, { Component } from "react";
import { View, ActivityIndicator, Modal, StatusBar } from "react-native";
import styles from "./FullScreenLoaderStyles";
import { colors } from "js/UIElements/colors";

class FullScreenLoader extends Component {
  componentWillMount = () => {
    setTimeout(() =>
      StatusBar.setBackgroundColor("rgba(52, 52, 52, 0.8)", true)
    );
  };

  componentWillUnmount = () => {
    setTimeout(() => StatusBar.setBackgroundColor("#fff", true));
  };
  render() {
    return (
      <Modal transparent={true} onRequestClose={() => {}}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.java} size="large" />
        </View>
      </Modal>
    );
  }
}

export default FullScreenLoader;
