export interface BookingStep2Props {
  setStep: (number: number) => void;
}

export interface BookingStep2 {
  meals: Meal[];
}

export interface Meal {
  starter: string;
  salad: string;
  soup: string;
  main: string;
  beverage: string;
}
