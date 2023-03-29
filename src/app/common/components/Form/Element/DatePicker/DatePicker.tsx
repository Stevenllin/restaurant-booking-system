import React, { useRef, useState } from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import moment from 'moment';
import Calendar from '../Calendar';
import { DatePickerProps } from './types';

const DatePicker: React.FC<DatePickerProps> = () => {
  const fieldRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendarVisibleState, setCalendarVisibleState] = useState<boolean>(false);

  const todayDate = moment().format('YYYY/MM/DD')
  const currentDate = ['']

  const handleOpenCalendar = () => {
    setCalendarVisibleState(true);
  };

  return (
    <>
      <div className="date-picker">
        <input
          ref={fieldRef}
          type="text"
        />
        <div className="date-picker-icons" onClick={handleOpenCalendar}>
          <AiFillCalendar />
        </div>
      </div>
      {
        calendarVisibleState && (
          <Calendar
            todayDate={todayDate}
            currentDate={currentDate}
          />
        )
      }
    </>
  )
}

export default DatePicker;
