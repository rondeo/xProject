import React from "react";
import Svg, { G, Path } from "react-native-svg";

const LocationIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 18 24">
      <G stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        <Path d="M8.9999998,11.2499997 C7.75724983,11.2499997 6.74999985,10.2427498 6.74999985,8.9999998 C6.74999985,7.7572498 7.75724983,6.7499998 8.9999998,6.7499998 C10.2427498,6.7499998 11.2499997,7.7572498 11.2499997,8.9999998 C11.2499997,10.2427498 10.2427498,11.2499997 8.9999998,11.2499997 Z M8.9999998,5.2499999 C6.92924984,5.2499999 5.24999988,6.9284998 5.24999988,8.9999998 C5.24999988,11.0714998 6.92924984,12.7499997 8.9999998,12.7499997 C11.0707498,12.7499997 12.7499997,11.0714998 12.7499997,8.9999998 C12.7499997,6.9284998 11.0707498,5.2499999 8.9999998,5.2499999 Z M8.9999998,21.75 C7.75274983,21.75675 1.49999997,12.1357497 1.49999997,8.9999998 C1.49999997,4.8584999 4.85774989,1.5 8.9999998,1.5 C13.1422497,1.5 16.4999996,4.8584999 16.4999996,8.9999998 C16.4999996,12.0937497 10.2277498,21.75675 8.9999998,21.75 Z M9,0 C4.02975,0 0,4.02974931 0,8.99999847 C0,12.7634978 7.50375,24.0082455 9,23.9999955 C10.473,24.0082455 18,12.7124978 18,8.99999847 C18,4.02974931 13.97025,0 9,0 Z" />
      </G>
    </Svg>
  );
};

LocationIconSvg.defaultProps = {
  fill: "black",
  height: 18,
  width: 24
};

export default LocationIconSvg;
