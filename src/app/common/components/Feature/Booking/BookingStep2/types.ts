export interface BookingStep2Props {
  setStep: (number: number) => void;
}

export interface BookingStep2Form {
  meals: Meal[];
}

export interface Meal {
  starter: string;
  salad: string;
  soup: string;
  main: string;
  dessert: string;
}
