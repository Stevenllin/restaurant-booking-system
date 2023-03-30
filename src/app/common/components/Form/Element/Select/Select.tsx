import React from 'react';
import { SelectProps } from './types';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => (
    <select {...props} ref={ref}>
      <option value="">pick your time</option>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
);

Select.displayName = 'Select';

export default Select;
