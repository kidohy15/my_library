import React from 'react';

import './box.css';

// export interface BoxProps {
  // primary?: boolean;
  // backgroundColor?: string;
  // size?: 'small' | 'medium' | 'large';
  // label: string;
  // onClick?: () => void;
// }

/** Primary UI component for user interaction */
// export const Box = ({}: BoxProps) => {
export const Box = () => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      // style={{ backgroundColor }}
      // {...props}
    >
      {/* {label} */}
      테스트
    </button>
  );
};
