import { Information } from '../BookingStep1/types';
import { Meal } from '../BookingStep2/types'; 
import { Dish } from '../BookingStep3/types';

export enum BookingActionEnum {
  SET_STEP1 = 'SET_STEP1',
  SET_STEP2 = 'SET_STEP2',
  SET_STEP3 = 'SET_STEP3'
}

export interface BookingAction {
  type: BookingActionEnum,
  payload: any
}

export interface BookingState {
  date: string;
  booker: Information;
  others?: Information[];
  meals: Meal[];
  aperitif: Dish[];
  starter: Dish[];
  salad: Dish[];
  soup: Dish[];
  main: Dish[];
  beverage: Dish[];
}

export function bookingReducer (state: BookingState, action: BookingAction): BookingState {
  const { type, payload } = action;

  switch (type) {
    case (BookingActionEnum.SET_STEP1): {
      const others: Information[] = payload.others.map((item: Information) => {
        return { ...item }
      });
      return { ...state, date: payload.date, booker: { ...payload.book }, others: others }
    }
    default:
      return state
  }
}