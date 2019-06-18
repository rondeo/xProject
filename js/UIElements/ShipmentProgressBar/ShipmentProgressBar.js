import React from "react";
import { View, Text } from "react-native";
import styles from "./ShipmentProgressBarStyle";
import _ from "lodash";
import { COLOR_MAP } from "js/static";
import { getStatusFromProgress } from "js/Services";
const CircleIcon = ({ leftPosition, bgColor }) => {
  return (
    <View
      style={{
        ...styles.circleIcon,
        left: `${leftPosition}%`,
        backgroundColor: bgColor
      }}
    />
  );
};

const ShipmentProgressBar = ({ progress }) => {
  let updatedProgress = { ...progress, grey: 0 };
  const keys = Object.keys(updatedProgress);
  let width = 0;
  const status = getStatusFromProgress(progress);
  return (
    <View style={styles.container}>
      {_.map(keys, (key, index) => {
        width = width + updatedProgress[key];

        return (
          <View
            style={{
              ...styles.linearGradient,
              backgroundColor: COLOR_MAP[key],
              width: `${key == "grey" ? 100 : width}%`,
              zIndex: 10 - index
            }}
            key={index}
          />
        );
      })}
      <CircleIcon leftPosition={0} bgColor={COLOR_MAP["green"]} />
      <CircleIcon leftPosition={width} bgColor={COLOR_MAP[status]} />
      <CircleIcon leftPosition={95} bgColor={COLOR_MAP["grey"]} />
    </View>
  );
};

ShipmentProgressBar.defaultProps = {
  progress: {}
};

export default ShipmentProgressBar;
