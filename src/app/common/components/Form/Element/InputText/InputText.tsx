import React from 'react';
import { InputTextProps } from './types';

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (props, ref) => (
    <input
      type={props.type}
      placeholder={props.placeholder}
      {...props}
      ref={ref}
    />
  )
);
InputText.displayName = 'InputAuth';

export default InputText;
