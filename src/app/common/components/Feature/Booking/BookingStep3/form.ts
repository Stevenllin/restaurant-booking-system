import { BookingStep3 } from './types';

export const initBookingFormStep3: () => BookingStep3 = () => {
  const form: BookingStep3 = {
    aperitif: [],
    starter: [],
    salad: [],
    soup: [],
    main: [],
    beverage: []
  }
  return form;
}
