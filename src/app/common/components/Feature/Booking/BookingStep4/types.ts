import { Information } from '../BookingStep1/types';
import { Meal } from '../BookingStep2/types';
import { Beverage } from '../BookingStep3/types';

export interface BookingStep4Summary {
  period: string;
  customers: Information[];
  meals: Meal[];
  beverage: Beverage[];
}