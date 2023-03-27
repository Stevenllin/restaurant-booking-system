export interface BookingStep1Props {}

export interface BookingStep1 {
  date: string;
  booker: Information;
  others?: Information[];
}

export interface Information {
  name: string;
  phone: string;
  birthday: string;
}