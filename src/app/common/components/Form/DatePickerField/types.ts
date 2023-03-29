import { UseControllerProps, FieldValues, FieldErrors } from 'react-hook-form';
import { DatePickerProps } from '../Element/DatePicker/types';

export type DatePickerFieldPropsType<TFieldValues extends FieldValues> = DatePickerFieldProps & UseControllerProps<TFieldValues>;

export interface DatePickerFieldProps extends DatePickerProps {
  label?: string;
  asterisk?: boolean;
  errors?: FieldErrors;
}
