import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Polyline, Polygon } from "react-native-svg";

const DocumentIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 22 29">
      <G stroke={props.fill} strokeWidth="1" fill="none" fill-rule="evenodd">
        <Polygon points="12.8938373 0.729764571 19.9897573 7.88026852 19.9897573 27.9016796 0.121181408 27.9016796 0.121181406 0.729764571" />
        <Path d="M4.37873338,7.16648647 L8.63628535,7.16648647" />
        <Path d="M4.37873338,11.7646948 L15.7322053,11.7646948" />
        <Path d="M4.37873338,15.5091639 L15.7322053,15.5091639" />
        <Path d="M4.37873338,19.4915603 L15.7322053,19.4915603" />
        <Path d="M4.37873338,23.6622868 L15.7322053,23.6622868" />
        <Polyline points="12.8938373 1.44481497 12.8938373 7.88026852 19.2801653 7.88026852" />
      </G>
    </Svg>
  );
};

DocumentIconSvg.defaultProps = {
  fill: "#9B9B9B",
  height: 22,
  width: 29
};

export default DocumentIconSvg;
