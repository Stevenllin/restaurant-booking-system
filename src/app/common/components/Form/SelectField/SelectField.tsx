import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import Select from '../Element/Select';
import { SelectFieldProps } from './types';
import ErrorMsg from '../ErrorMsg';

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, asterisk, errors, ...props }, ref) => (
    <div className="select-text-field m-1">
      {label && (
        <label className="mt-2">
          <p className="text-uppercase d-flex align-items-center">
            {label} {asterisk && <span className="color-danger ms-2">*</span>}
          </p>
        </label>
      )}
      <Select {...props} ref={ref} />
      {errors !== undefined && Object.keys(errors).length !== 0 && (
        <ErrorMessage
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          /** @ts-ignore */
          name={props.name}
          errors={errors}
          render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
        />
      )}
    </div>
  )
);

SelectField.displayName = 'InputAuthTextField';

export default SelectField;
