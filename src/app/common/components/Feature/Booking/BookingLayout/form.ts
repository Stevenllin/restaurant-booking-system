import { BookingFormValues } from './types';
import { initBookingFormStep1 } from '../BookingStep1/form';

export const initBookingForm: () => BookingFormValues = () => {
  const form: BookingFormValues = {
    ...initBookingFormStep1()
  }
  
  return form;
}