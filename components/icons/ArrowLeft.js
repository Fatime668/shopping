import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgArrowLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 17 15"
    className
    {...props}>
    <Path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.25 7.274h15M7.3 13.299 1.25 7.275 7.3 1.25"
    />
  </Svg>
);
const Memo = memo(SvgArrowLeft);
export default Memo;
