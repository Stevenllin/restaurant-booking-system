export interface CalendarProps {
  todayDate: string;
  currentDate: string[];
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