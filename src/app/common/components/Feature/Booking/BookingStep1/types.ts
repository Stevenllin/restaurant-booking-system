export interface BookingStep1Props {
  setStep: (number: number) => void;
}

export interface BookingStep1 {
  date: string;
  booker: Information;
  others: Information[];
}

export interface Information {
  name: string;
  gender: string;
  phone: string;
  birthday: string;
}