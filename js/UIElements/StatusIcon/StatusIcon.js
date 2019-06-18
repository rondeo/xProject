import React from "react";
import styles from "./StatusIconStyle";
import { View } from "react-native";
import { getStatusFromProgress } from "js/Services";
import { COLOR_MAP } from "js/static";
import { CarrierShipIconSvg } from "js/UIElements/SvgImages";

class StatusIcon extends React.Component {
  getContainerStyle = () => {
    const {
      showBorder,
      showShadow,
      customStyle,
      progress,
      status
    } = this.props;
    const iconStatus = status ? status : getStatusFromProgress(progress);
    const bgColor = COLOR_MAP[iconStatus];
    let style = styles.container;

    if (showBorder) {
      style = { ...style, ...styles.shadow };
    }
    if (showShadow) {
      style = { ...style, ...styles.border };
    }
    style = { ...style, ...customStyle, backgroundColor: bgColor };
    return style;
  };
  render() {
    const containerStyle = this.getContainerStyle();
    return (
      <View style={containerStyle}>
        <CarrierShipIconSvg />
      </View>
    );
  }
}

StatusIcon.defaultProps = {
  customStyle: {},
  showBorder: false,
  showShadow: false,
  progress: {}
};

export default StatusIcon;
