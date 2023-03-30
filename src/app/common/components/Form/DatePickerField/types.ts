import { UseControllerProps, FieldValues, FieldErrors } from 'react-hook-form';
import { CalendarModeValuesEnum } from 'app/core/enum/common/calendarModeValuesEnum';

export type DatePickerFieldPropsType<TFieldValues extends FieldValues> = DatePickerFieldProps & UseControllerProps<TFieldValues>;

export interface DatePickerFieldProps {
  label?: string;
  mode: CalendarModeValuesEnum;
  asterisk?: boolean;
  errors?: FieldErrors;
}
