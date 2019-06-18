import React from "react";
import { colors } from "js/UIElements/colors";
import Svg, { G, Path } from "react-native-svg";
import { Props } from "react-native-image-zoom-viewer/built/image-viewer.type";

const AchIconSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 20 19">
      <G stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        <Path d="M0.411936117,0.000499603154 C0.177683579,0.022577232 -0.0010102512,0.219756631 4.29855275e-06,0.455045058 L4.29855275e-06,17.7277723 C2.93976006e-05,17.9788005 0.203521628,18.1822927 0.454549753,18.1823178 L19.5454588,18.1823178 C19.796487,18.1822927 19.9999792,17.9788005 20.0000043,17.7277723 L20.0000043,6.36413597 C19.9999792,6.11310784 19.796487,5.90961561 19.5454588,5.90959051 L11.3636407,5.90959051 L11.3636407,0.455045058 C11.3636156,0.204016932 11.1601233,0.000524702202 10.9090952,0.000499603154 L0.454549753,0.000499603154 C0.440353017,-0.000166534385 0.426132852,-0.000166534385 0.411936117,0.000499603154 Z M0.909095208,0.909590512 L10.4545498,0.909590512 L10.4545498,17.2732269 L8.18182248,17.2732269 L8.18182248,13.1823178 C8.18179738,12.9312897 7.97830515,12.7277974 7.72727703,12.7277723 L3.63636793,12.7277723 C3.6221712,12.7271062 3.60795103,12.7271062 3.5937543,12.7277723 C3.35950176,12.74985 3.18080793,12.9470294 3.18182248,13.1823178 L3.18182248,17.2732269 L0.909095208,17.2732269 L0.909095208,0.909590512 Z M5.63210657,2.2661246 C5.39792652,2.29185872 5.22221014,2.49223705 5.22727703,2.72777233 L5.22727703,3.21782915 C4.9065193,3.26636597 4.60006293,3.36754301 4.33239066,3.53743142 C3.94015816,3.78637665 3.63636793,4.22581506 3.63636793,4.75192006 C3.63636793,5.29112347 3.94523112,5.72024256 4.2968793,5.98771551 C4.64852748,6.25518847 5.05131703,6.41625188 5.39773157,6.55589733 C5.73571566,6.69214438 6.06962725,6.84623233 6.28551566,7.01044278 C6.50140407,7.17465324 6.59091339,7.29713938 6.59091339,7.52180642 C6.59091339,7.73453028 6.51043589,7.84452642 6.31392475,7.9692496 C6.11741362,8.09397278 5.79871907,8.18231778 5.45454975,8.18231778 C4.93768793,8.18231778 4.54024839,7.97531301 4.40341339,7.84851097 C4.21905697,7.67592198 3.92969556,7.68546137 3.75710657,7.86981778 C3.58451759,8.0541742 3.59405697,8.34353562 3.77841339,8.5161246 C4.05759384,8.77483551 4.47614748,8.97878551 5.0000043,9.05589733 L5.0000043,9.54595415 C4.99768599,9.70987957 5.08381125,9.86235477 5.22540105,9.94499402 C5.36699085,10.0276333 5.54210866,10.0276333 5.68369846,9.94499402 C5.82528825,9.86235477 5.91141352,9.70987957 5.90909521,9.54595415 L5.90909521,9.05589733 C6.22985293,9.00736051 6.5363093,8.90618347 6.80398157,8.73629506 C7.19621407,8.48734983 7.5000043,8.04791142 7.5000043,7.52180642 C7.5000043,6.98260301 7.19114112,6.55348392 6.83949293,6.28601097 C6.48784475,6.01853801 6.08505521,5.8574746 5.73864066,5.71782915 C5.40065657,5.5815821 5.06674521,5.42749438 4.85085657,5.26328369 C4.63496793,5.09907301 4.54545884,4.9765871 4.54545884,4.75192006 C4.54545884,4.53919619 4.62593634,4.42920006 4.82244748,4.30447688 C5.01895862,4.17975369 5.33765293,4.09140869 5.68182248,4.09140869 C6.1986843,4.09140869 6.59612407,4.29841347 6.73295884,4.42521551 C6.85221653,4.53686101 7.02197735,4.57640249 7.17829403,4.52894505 C7.33461071,4.48148761 7.45373504,4.35424117 7.49079403,4.19513823 C7.52785303,4.03603529 7.47721654,3.86924737 7.35795884,3.75760188 C7.07877816,3.49889051 6.66022475,3.29494074 6.13636793,3.21782915 L6.13636793,2.72777233 C6.13829287,2.60475573 6.09027351,2.48621208 6.00327698,2.39921555 C5.91628046,2.31221903 5.79773681,2.26419967 5.67472021,2.2661246 C5.66052347,2.26545847 5.64630331,2.26545847 5.63210657,2.2661246 Z M11.3636407,6.81868142 L19.0909134,6.81868142 L19.0909134,17.2732269 L11.3636407,17.2732269 L11.3636407,6.81868142 Z M4.09091339,13.6368632 L7.27273157,13.6368632 L7.27273157,17.2732269 L4.09091339,17.2732269 L4.09091339,13.6368632 Z" />
      </G>
    </Svg>
  );
};

AchIconSvg.defaultProps = {
  fill: colors.white,
  width: 20,
  height: 19
};

export default AchIconSvg;