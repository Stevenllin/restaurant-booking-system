import { SelectProps } from '../Element/Select/types';
import { FieldErrors } from 'react-hook-form';
import { Options } from '../../../../core/model/element/option';

export interface SelectFieldProps extends SelectProps {
  name: string;
  label: string;
  asterisk: boolean;
  options: Options[];
  errors?: FieldErrors;
}
