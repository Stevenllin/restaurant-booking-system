import { ErrorMessage } from '@hookform/error-message';
import { useController, useFormContext, FieldValues, ControllerRenderProps } from 'react-hook-form';
import ErrorMsg from '../ErrorMsg';

const InputTextByContext = ({
  field,
  placeholder,
  handleChange
}: {
  field: ControllerRenderProps<FieldValues, string>,
  placeholder: string,
  handleChange?: () => void
}) => {
  // const { register } = useFormContext();
  // const control = register(fieldName);
  // const { field } = useController(control);
  return (
    <>
      <input
        {...field}
        placeholder={placeholder}
        onChange={(event) => {
          if (handleChange) return field.onChange(event)
        }}
      />
    </>
  )
}

InputTextByContext.displayName = 'InputTextByContext'

const InputTextField = ({
  label,
  fieldName,
  placeholder,
  asterisk = false,
  handleChange
}: {
  label: string,
  fieldName: string,
  placeholder: string,
  asterisk: boolean,
  handleChange?: () => void
}) => {
  const { register } = useFormContext();
  const  control = register(fieldName);
  const { field, formState } = useController(control);

  return (
    <>
      {
        label && (
          <label>
            <p>{label} {asterisk && <span>*</span>}</p>
          </label>
        )
      }
      <InputTextByContext
        field={field}
        placeholder={placeholder}
        handleChange={handleChange}
      />
      {
        formState.errors && (
          <ErrorMessage
            name={field.name}
            errors={formState.errors}
            render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
          />
        )
      }
    </>
  )
}

InputTextField.displayName = 'InputTextField'

export default InputTextField;