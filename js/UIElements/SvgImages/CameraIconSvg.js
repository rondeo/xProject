import React from "react";
import Svg, { G, Path } from "react-native-svg";

const CameraIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 32 23">
      <G stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        <Path d="M0,22 C0,22.555 0.448,23 1,23 L31,23 C31.552,23 32,22.555 32,22 L32,4 C32,3.45 31.552,3 31,3 L10,3 L10,1 C10,0.45 9.5525,0 9,0 L4,0 C3.448,0 3,0.45 3,1 L3,3 L1,3 C0.448,3 0,3.45 0,4 L0,22 Z M2,5 L30,5 L30,21 L2,21 L2,5 Z M20,7 C16.6915,7 14,9.69 14,13 C14,16.31 16.6915,19 20,19 C23.3085,19 26,16.31 26,13 C26,9.69 23.3085,7 20,7 Z M20,17 C17.7945,17 16,15.205 16,13 C16,10.795 17.7945,9 20,9 C22.2055,9 24,10.795 24,13 C24,15.205 22.2055,17 20,17 Z M8,7.5 L5,7.5 C4.448,7.5 4,7.95 4,8.5 C4,9.055 4.448,9.5 5,9.5 L8,9.5 C8.5525,9.5 9,9.055 9,8.5 C9,7.95 8.5525,7.5 8,7.5 Z M5,2 L8,2 L8,3 L5,3 L5,2 Z" />
      </G>
    </Svg>
  );
};

CameraIconSvg.defaultProps = {
  fill: "#000000",
  height: 23,
  width: 32
};

export default CameraIconSvg;
