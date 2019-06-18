import React from "react";
import { colors } from "js/UIElements/colors";
import Svg, { G, Path } from "react-native-svg";

const HelpIconSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
      <G stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        <G>
          <Path d="M8,0 C3.584,0 0,3.584 0,8 C0,12.416 3.584,16 8,16 C12.416,16 16,12.416 16,8 C16,3.584 12.416,0 8,0 Z M5.928,3.696 C6.448,3.264 7.136,3.04 7.976,3.04 C8.408,3.04 8.8,3.104 9.16,3.24 C9.512,3.376 9.824,3.552 10.072,3.784 C10.328,4.016 10.52,4.288 10.664,4.6 C10.8,4.912 10.872,5.256 10.872,5.616 C10.872,5.976 10.808,6.312 10.68,6.6 C10.552,6.896 10.36,7.184 10.112,7.488 L9.144,8.752 C9.032,8.888 8.92,9.016 8.888,9.136 C8.848,9.256 8.8,9.416 8.8,9.616 L8.8,9.96 C8.8,10.056 8.8,10.392 8.8,10.392 L7.2,10.392 L7.2,8.792 C7.2,8.792 7.248,8.328 7.392,8.144 L8.36,6.832 C8.56,6.592 8.688,6.384 8.768,6.216 C8.848,6.048 8.88,5.864 8.88,5.68 C8.88,5.4 8.792,5.176 8.624,5 C8.456,4.824 8.224,4.736 7.92,4.736 C7.624,4.736 7.384,4.824 7.208,5 C7.032,5.184 6.912,5.432 6.84,5.752 C6.816,5.848 6.752,5.888 6.656,5.88 L5.096,5.648 C5,5.64 4.968,5.584 4.984,5.472 C5.088,4.728 5.4,4.136 5.928,3.696 Z M7.2,11.2 L8.816,11.2 L8.8,12.8 L7.2,12.8 L7.2,11.2 Z" />
        </G>
      </G>
    </Svg>
  );
};

HelpIconSvg.defaultProps = {
  fill: colors.dodgerBlue,
  width: 16,
  height: 16
};

export default HelpIconSvg;