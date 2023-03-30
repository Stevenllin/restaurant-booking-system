import React, { useState } from 'react';
import { CalendarModeValuesEnum } from 'app/core/enum/common/calendarModeValuesEnum';
import moment from 'moment';
import { CalendarProps, CalendarDate, DayOptions, WeekOptions, MonthOptions, YearOptions } from './types';

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  const weeksTextDefine: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthTextDefine: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const todayDateSnippets = props.todayDate.split('/').filter((d) => d);
  const currentDateSnippets = props.currentDate[0].split('/').filter((d) => d);

  const [panelDateState, setPanelDateState] = useState<CalendarDate>({
    year: currentDateSnippets[0] ?? todayDateSnippets[0],
    month: currentDateSnippets[1] ?? todayDateSnippets[1],
    day: currentDateSnippets[2] ?? todayDateSnippets[2]
  });

  const handleCreateYearOptions = () => {
    const currentYear = +panelDateState.year;
    switch(props.mode){
      case(CalendarModeValuesEnum.Birthday): {
        const options = Array.from(Array(101), (_, index) => ({ value: String(currentYear - index), text: String(currentYear - index) })).reverse()
        return options;
      }
      case(CalendarModeValuesEnum.Date): {
        const options = Array.from(Array(2), (_, index) => ({ value: String(currentYear + index), text: String(currentYear + index) })).reverse()
        return options;
      }
    }
  }

  const handleCreateMonthOptions = () => {
    const options = Array.from(Array(12), (_, index) => ({ value: String(index + 1).padStart(2, '0'), text: monthTextDefine[index] }));
    return options;
  }
  
  const handleCreateWeekOptions = () => {
    const options = Array.from(Array(7), (_, index) => ({ value: String(index + 1), text: weeksTextDefine[index] }));
    const lastOption = options.pop();
    if (lastOption) options.unshift(lastOption);
    return options;
  }

  const handleCreateDayOptions = () => {
    const year = parseInt(panelDateState.year)
    const month = parseInt(panelDateState.month)
    const leapYearCond = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const eachMonthDays = [31, leapYearCond ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const startWeek = moment(`${year}/${month}/01`).day()
    const cells = eachMonthDays[month - 1] + startWeek;
    const options: (DayOptions | undefined)[] = [];

    for (let i = 0; i < cells; i += 1) {
      const day = String((i + 1) - startWeek);
      options.push(i >= startWeek ? { value: `${panelDateState.year}/${panelDateState.month}/${day.padStart(2, '0')}`, text: day } : undefined);
    }

    return options;
  }

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPanelDateState((prevState) => ({ ...prevState, year: event.target.value }));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPanelDateState((prevState) => ({ ...prevState, month: event.target.value }));
  };

  const handleSelectDate = (date: string) => {
    props.onSelectDate(date);
  };

  const monthOptions: MonthOptions[] = handleCreateMonthOptions();
  const weekOptions: WeekOptions[] = handleCreateWeekOptions();
  const dayOptions: (DayOptions | undefined)[] = handleCreateDayOptions();
  const yearOptions: YearOptions[] = handleCreateYearOptions();

  return (
    <div ref={ref} className="calendar">
      <div className="calendar-header">
        <select value={panelDateState.year} onChange={handleYearChange}>
          {yearOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <span>year</span>
        <select value={panelDateState.month} onChange={handleMonthChange}>
          {monthOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <span>month</span>
      </div>
      <div className="calendar-body">
        <ul className="calendar-week-scope">
          {weekOptions.map((option) => (
            <li className="calendar-week" key={option.value}>
              {option.text}
            </li>
          ))}
        </ul>
        <ul className="calendar-day-scope">
          {dayOptions.map((option, index) => (
            <React.Fragment key={index}>
              {option
                ? (
                  <li
                    className={
                      'calendar-day' +
                      (props.todayDate === option.value ? ' calendar-day-today' : '') +
                      (props.currentDate.includes(option.value) ? 'calendar-day-active' : '')
                    }
                    key={index}
                  >
                    <span
                      onClick={() => handleSelectDate(option.value)}
                    >
                      {option.text}
                    </span>
                  </li>
                  )
                : (
                  <li />
                  )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
})

Calendar.displayName = 'Calendar';

export default Calendar;