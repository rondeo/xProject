import React from "react";
import { colors } from "js/UIElements/colors";
import Svg, { G, Path } from "react-native-svg";
import { Props } from "react-native-image-zoom-viewer/built/image-viewer.type";

const PaypalIconSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 18 19">
      <G stroke="none" strokeWidth="1" fillRule="evenodd">
        <Path
          d="M3.89944131,15.4189086 L5.64330617,4.41914573 C5.87434297,2.96183668 7.13079221,1.88888889 8.6063015,1.88888889 L12.6555556,1.88888889 C15.9296296,2.01481481 17.3148148,3.52592593 16.8111111,6.42222222 C16.0555556,10.7666667 12.8444444,11.3333333 11.7111111,11.5222222 C10.9555556,11.6481481 10.2,11.6481481 9.44444444,11.5222222 C8.81481481,11.5222222 8.43703704,11.837037 8.31111111,12.4666667 C8.21989246,12.9227599 8.06259655,13.9074713 7.83922336,15.4208009 L7.83925438,15.4208055 C7.67331983,16.5449944 6.70859146,17.3777778 5.57222222,17.3777778 L5.57222222,17.3777778 C4.63683291,17.3777778 3.87855006,16.6194949 3.87855006,15.6841056 C3.87855006,15.5952956 3.88553535,15.5066232 3.89944131,15.4189086 Z"
          stroke={props.fill}
        />
        <Path
          d="M0.550081233,12.0191457 L2.05441728,2.53025684 C2.28545408,1.07294779 3.54190332,2.38077748e-14 5.01741261,2.35367281e-14 L9.06666667,2.30926389e-14 C12.3407407,0.125925926 13.7259259,1.63703704 13.2222222,4.53333333 C12.4666667,8.87777778 9.25555556,9.44444444 8.12222222,9.63333333 C7.36666667,9.75925926 6.61111111,9.75925926 5.85555556,9.63333333 C5.22592593,9.63333333 4.84814815,9.94814815 4.72222222,10.5777778 C4.5962963,11.2074074 4.34444444,12.8444444 3.96666667,15.4888889 L3.51307657,15.4888889 C1.85622232,15.4888889 0.513076569,14.1457431 0.513076569,12.4888889 C0.513076569,12.3315798 0.525449612,12.1745144 0.550081233,12.0191457 Z"
          stroke={props.fill}
        />
        <Path
          d="M4.63748118,10.7635803 L5.64330617,4.41914573 C5.87434297,2.96183668 7.13079221,1.88888889 8.6063015,1.88888889 L12.6555556,1.88888889 C12.7782739,1.89360882 12.8983385,1.90027479 13.0157495,1.90888679 C13.3378405,2.59797334 13.4066647,3.47278885 13.2222222,4.53333333 C12.4666667,8.87777778 9.25555556,9.44444444 8.12222222,9.63333333 C7.36666667,9.75925926 6.61111111,9.75925926 5.85555556,9.63333333 C5.22592593,9.63333333 4.84814815,9.94814815 4.72222222,10.5777778 C4.5962963,11.2074074 4.67777778,11.1777778 4.96666667,10.4888889 C4.86384215,10.5924035 4.75353803,10.6839692 4.63748118,10.7635803 Z"
          fill={props.fill}
        />
      </G>
    </Svg>
  );
};

PaypalIconSvg.defaultProps = {
  fill: colors.white,
  width: 18,
  height: 19
};

export default PaypalIconSvg;
