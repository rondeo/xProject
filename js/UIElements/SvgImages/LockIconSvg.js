import React from "react";
import Svg, { G, Path } from "react-native-svg";

const LockIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 20 25">
      <G stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        <Path d="M3.077548,6.9244834 L3.077548,12.3098081 L0.769387,12.3098081 C0.344301,12.3098081 0,12.6544935 0,13.0791951 L0,23.8506138 C0,24.2757001 0.344301,24.6200008 0.769387,24.6200008 L19.234292,24.6200008 C19.659378,24.6200008 20.003679,24.2757001 20.003679,23.8506138 L20.003679,13.0791951 C20.003679,12.6544935 19.659378,12.3098081 19.234292,12.3098081 L16.92613,12.3098081 L16.92613,6.9244834 C16.92613,3.1060155 13.81973,0 10.001647,0 C6.183948,0 3.077548,3.1060155 3.077548,6.9244834 Z M18.464904,23.0812267 L1.538774,23.0812267 L1.538774,13.8485822 L18.464904,13.8485822 L18.464904,23.0812267 Z M10.001647,15.3873563 C8.729081,15.3873563 7.69387,16.4229512 7.69387,17.6955174 C7.69387,18.6984134 8.337463,19.551279 9.23226,19.8690358 L9.23226,20.7730656 C9.23226,21.1981519 9.576945,21.5424526 10.001647,21.5424526 C10.426733,21.5424526 10.771034,21.1981519 10.771034,20.7730656 L10.771034,19.8690358 C11.666216,19.551279 12.309808,18.6984134 12.309808,17.6955174 C12.309808,16.4229512 11.274598,15.3873563 10.001647,15.3873563 Z M10.001647,18.4649045 C9.577715,18.4649045 9.23226,18.1198344 9.23226,17.6955174 C9.23226,17.2712005 9.577715,16.9261304 10.001647,16.9261304 C10.425964,16.9261304 10.771034,17.2712005 10.771034,17.6955174 C10.771034,18.1198344 10.425964,18.4649045 10.001647,18.4649045 Z M10.001647,1.5387741 C12.971481,1.5387741 15.387356,3.9546494 15.387356,6.9244834 L15.387356,12.3098081 L4.616322,12.3098081 L4.616322,6.9244834 C4.616322,3.9546494 7.032198,1.5387741 10.001647,1.5387741 Z" />
      </G>
    </Svg>
  );
};

LockIconSvg.defaultProps = {
  fill: "#000000",
  height: 20,
  width: 25
};

export default LockIconSvg;
