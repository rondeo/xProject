import React from "react";
import Svg, { G, Path } from "react-native-svg";

const PortIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 12 14">
      <G stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        <Path
          d="M11.4408517,7.7334674 L9.7417805,9.3588169 L10.2569859,9.5084956 C9.5183384,10.7233079 8.1836137,11.2569923 6.6629463,11.3616744 L6.6629463,5.20625517 L8.0729616,5.20625517 C8.1917314,5.3244821 8.3538818,5.39715425 8.5339378,5.39715425 C8.8918701,5.39715425 9.1841886,5.10701542 9.1841886,4.74798632 C9.1841886,4.3889711 8.8918701,4.09827693 8.5339378,4.09827693 C8.3538818,4.09827693 8.1911802,4.17149054 8.0729616,4.28971746 L6.6629463,4.28971746 L6.6629463,3.54780729 C7.348989,3.28043751 7.8381627,2.6166363 7.8381627,1.8379069 C7.8381627,0.82537819 7.0138258,0 5.99970046,0 C4.98557515,0 4.16123822,0.82541984 4.16123822,1.83735156 C4.16123822,2.67090717 4.72255093,3.36940342 5.48450897,3.5933454 L5.48450897,4.28914824 L3.92538415,4.28914824 C3.80769868,4.17092132 3.64500546,4.0977077 3.46549091,4.0977077 C3.10755861,4.0977077 2.81578152,4.38894333 2.81578152,4.74741709 C2.81578152,5.10643231 3.10755861,5.39658502 3.46549091,5.39658502 C3.64554692,5.39658502 3.80824847,5.32445572 3.92538415,5.20568595 L5.48450897,5.20568595 L5.48450897,11.3573567 C3.88192857,11.238044 2.48385315,10.6154465 1.78203872,9.300367 L2.29561972,9.1864787 L0.70664521,7.4542258 L0,9.695728 L0.59927108,9.5628581 C1.47512993,11.481012 3.46983786,13.0255589 5.72425184,13.1748074 L6.0740484,13.883633 L6.422762,13.1769871 C8.5665239,13.0332644 10.4739875,11.6236935 11.4186255,9.8486792 L12,10.0184336 L11.4408517,7.7334674 Z M5.0571866,1.83725437 C5.0571866,1.31770344 5.48020507,0.89522643 5.999756,0.89522643 C6.5193069,0.89522643 6.9423254,1.31716198 6.9423254,1.83725437 C6.9423254,2.3568053 6.5193069,2.77982377 5.999756,2.77982377 C5.48020507,2.78036523 5.0571866,2.35734676 5.0571866,1.83725437 Z"
          id="Fill-1"
        />
      </G>
    </Svg>
  );
};

PortIconSvg.defaultProps = {
  fill: "white",
  height: 12,
  width: 14
};

export default PortIconSvg;