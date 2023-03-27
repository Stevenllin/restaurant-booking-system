import { ErrorMessage } from '@hookform/error-message';
import { useController, useFormContext, FieldValues, ControllerRenderProps } from 'react-hook-form';
import ErrorMsg from '../ErrorMsg';

const InputTextByContext = ({
  field,
  type,
  placeholder,
  handleChange
}: {
  field: ControllerRenderProps<FieldValues, string>,
  type: string,
  placeholder?: string,
  handleChange?: () => void
}) => {
  console.log('{...field}', field);
  // const { register } = useFormContext();
  // const control = register(fieldName);
  // const { field } = useController(control);
  return (
    <>
      <input
        {...field}
        type={type}
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
  type,
  placeholder,
  asterisk = false,
  handleChange
}: {
  label: string,
  fieldName: string,
  type: string,
  placeholder?: string,
  asterisk: boolean,
  handleChange?: () => void
}) => {
  const { register } = useFormContext();
  const  control = register(fieldName);
  const { field, formState } = useController(control);

  return (
    <div className="input-text-field">
      {
        label && (
          <label>
            <p className="d-flex align-items-center">{label} {asterisk && <span className="ms-2 color-danger">*</span>}</p>
          </label>
        )
      }
      <InputTextByContext
        field={field}
        type={type}
        placeholder={placeholder}
        handleChange={handleChange}
      />
      {
        formState.errors && (
          <ErrorMessage
            /** @ts-ignore */
            name={field.name}
            errors={formState.errors}
            render={({ message }) => <ErrorMsg>{message}</ErrorMsg>}
          />
        )
      }
    </div>
  )
}

InputTextField.displayName = 'InputTextField'

export default InputTextField;