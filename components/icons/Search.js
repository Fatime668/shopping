import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className
    {...props}>
    <Circle
      cx={11.767}
      cy={11.767}
      r={8.989}
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.018 18.485 21.542 22"
    />
  </Svg>
);
const Memo = memo(SvgSearch);
export default Memo;
