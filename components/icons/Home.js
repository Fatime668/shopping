import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import {memo} from 'react';
const SvgHome = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    fill="none"
    viewBox="0 0 66 66"
    className
    {...props}>
    <G filter="url(#home_svg__a)">
      <Path
        fill="#5956E9"
        fillRule="evenodd"
        d="M30.157 37.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.434.636 1.434 1.42v3.076c0 .662.533 1.203 1.202 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0l-6.551 5.258a2.42 2.42 0 0 0-.962 1.904v8.715C23.5 37.46 25.055 39 26.973 39h1.924c.685 0 1.241-.55 1.241-1.229"
        clipRule="evenodd"
      />
      <Path
        stroke="#5956E9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M30.157 37.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.434.636 1.434 1.42v3.076c0 .662.533 1.203 1.202 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0l-6.551 5.258a2.42 2.42 0 0 0-.962 1.904v8.715C23.5 37.46 25.055 39 26.973 39h1.924c.685 0 1.241-.55 1.241-1.229v0"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
const Memo = memo(SvgHome);
export default Memo;
