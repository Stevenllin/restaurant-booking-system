import React, { useRef, useState, useEffect } from 'react';
import { useController, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import ErrorMsg from '../ErrorMsg';
import { DatePickerFieldPropsType } from './types';

import { AiFillCalendar } from 'react-icons/ai';
import moment from 'moment';
import Calendar from '../Element/Calendar';


const DatePickerField = <TFieldValues extends FieldValues>({ name, control, label, mode, asterisk, errors }: DatePickerFieldPropsType<TFieldValues>) => {
  const { field } = useController({ name, control });
  
  const fieldRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendarVisibleState, setCalendarVisibleState] = useState<boolean>(false);

  const todayDate = moment().format('YYYY/MM/DD')
  const currentDate = field.value ? [field.value] : [''];

  useEffect(() => {
    document.addEventListener('mousedown', handleClickCalendarOutside);
    return () => { document.removeEventListener('mousedown', handleClickCalendarOutside); };
  }, []);

  const handleOpenCalendar = () => {
    setCalendarVisibleState(true);
  };

  const handleClickCalendarOutside = (event: MouseEvent) => {
    if (
      (fieldRef.current && !fieldRef.current.contains(event.target as Node)) &&
      (calendarRef.current && !calendarRef.current.contains(event.target as Node))
    ) {
      setCalendarVisibleState(false);
    }
  };

  const handleCalendarSelectDate = (date: string) => {
    field.onChange(date)
  };

  console.log('field', field.value);
  
  return (
    <div className="date-picker-field m-1">
      {label && (
        <label className="mt-2">
          <p className="text-uppercase d-flex align-items-center">
            {label} {asterisk && <span className="color-danger ms-2">*</span>}
          </p>
        </label>
      )}
      <div className="date-picker">
        <input
          {...field}
          ref={fieldRef}
          type="text"
          onClick={handleOpenCalendar}
          onChange={field.onChange}
        />
        <div className="date-picker-icons" onClick={handleOpenCalendar}>
          <AiFillCalendar />
        </div>
      </div>
      {
        calendarVisibleState && (
          <Calendar
            ref={calendarRef}
            mode={mode}
            todayDate={todayDate}
            currentDate={currentDate}
            onSelectDate={handleCalendarSelectDate}
          />
        )
      }
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