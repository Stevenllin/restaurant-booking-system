import { CalendarModeValuesEnum } from 'app/core/enum/common/calendarModeValuesEnum';

export interface CalendarProps {
  mode: CalendarModeValuesEnum;
  todayDate: string;
  currentDate: string[];
  onSelectDate: (date: string) => void;
}

export interface CalendarDate {
  year: string;
  month: string;
  day: string;
}

export interface DayOptions {
  value: string;
  text: string;
}

export interface WeekOptions {
  value: string;
  text: string;
}

export interface MonthOptions {
  value: string;
  text: string;
}

export interface YearOptions {
  value: string;
  text: string;
}