import { Options } from '../../../../../core/model/element/option';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Options[];
}
