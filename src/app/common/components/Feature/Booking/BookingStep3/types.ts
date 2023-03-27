export interface BookingStep3Props {}

export interface BookingStep3 {
  aperitif: Dish[];
  starter: Dish[];
  salad: Dish[];
  soup: Dish[];
  main: Dish[];
  beverage: Dish[];
}

export interface Dish {
  name: string;
  price: number;
}