export interface BookingStep1Props {
  setStep: (number: number) => void;
}

export interface BookingStep1Form {
  date: string;
  time: string;
  period: string;
  booker: Information;
  others?: Information[];
}

export interface Information {
  id: number;
  name: string;
  phone: string;
  birthday: string;
}