import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "js/UIElements/colors";

const CheckBoxIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 10 7">
      <G stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        <Path d="M4,4.58578644 L8.29289322,0.292893219 C8.47385763,0.111928813 8.72385763,0 9,0 C9.55228475,0 10,0.44771525 10,1 C10,1.27614237 9.88807119,1.52614237 9.70710678,1.70710678 L4.70710678,6.70710678 C4.52614237,6.88807119 4.27614237,7 4,7 C3.72385763,7 3.47385763,6.88807119 3.29289322,6.70710678 L0.292893219,3.70710678 C0.111928813,3.52614237 0,3.27614237 0,3 C0,2.44771525 0.44771525,2 1,2 C1.27614237,2 1.52614237,2.11192881 1.70710678,2.29289322 L4,4.58578644 Z" />
      </G>
    </Svg>
  );
};

CheckBoxIconSvg.defaultProps = {
  fill: colors.white,
  height: 7,
  width: 10
};

export default CheckBoxIconSvg;
