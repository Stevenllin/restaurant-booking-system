import { BookingStep2 } from './types';

export const initBookingFormStep2: () => BookingStep2 = () => {
  const form: BookingStep2 = {
    meals: []
  }
  return form;
}
