import PropTypes from "prop-types";
import React from "react";
import Svg, { G, Polygon } from "react-native-svg";

const ArrowIconSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 24 24">
      <Polygon
        fill={props.fill}
        fillRule="nonzero"
        points="12 18 0 6 24 6"
        originX="12"
        originY="12"
        rotation={props.rotation}
      />
    </Svg>
  );
};

ArrowIconSvg.defaultProps = {
  width: 12,
  height: 12,
  fill: "#000",
  rotation: 0
};
ArrowIconSvg.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string,
  rotation: PropTypes.number
};
export default ArrowIconSvg;
