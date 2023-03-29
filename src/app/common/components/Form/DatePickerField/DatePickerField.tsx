import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import DatePicker from '../Element/DatePicker';
import ErrorMsg from '../ErrorMsg';
import { DatePickerFieldPropsType } from './types';

const DatePickerField = <TFieldValues extends FieldValues>({ label, asterisk, errors }: DatePickerFieldPropsType<TFieldValues>) => {
  return (
    <div className="date-picker-field m-1">
      {label && (
        <label className="my-2">
          <p className="text-uppercase d-flex align-items-center">
            {label} {asterisk && <span className="color-danger ms-2">*</span>}
          </p>
        </label>
      )}
      <DatePicker />
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
}

export default DatePickerField;