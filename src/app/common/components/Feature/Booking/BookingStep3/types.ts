export interface BookingStep3Props {
  setStep: (number: number) => void;
}

export interface BookingStep3Form {
  beverage: Beverage[];
}

export interface Beverage {
  name: string;
  number: number;
  price: number;
}