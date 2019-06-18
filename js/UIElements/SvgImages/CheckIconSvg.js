import React from "react";

import Svg, { G, Polyline } from "react-native-svg";
import { colors } from "js/UIElements/colors";
const CheckIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 14 11">
      <G
        id="Page-1"
        stroke="none"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        stroke={props.fill}
      >
        <Polyline points="0.7 3.5571429 3.80909091 7.9 9.7859169 2.4212428 12.1 0.3" />
      </G>
    </Svg>
  );
};

CheckIconSvg.defaultProps = {
  fill: colors.white,
  height: 14,
  width: 11
};

export default CheckIconSvg;
