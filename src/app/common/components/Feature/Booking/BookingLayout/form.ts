import { BookingFormValues } from './types';
import { initBookingFormStep1 } from '../BookingStep1/form';
import { initBookingFormStep2 } from '../BookingStep2/form';
import { initBookingFormStep3 } from '../BookingStep3/form';  

export const initBookingForm: () => BookingFormValues = () => {
  const form: BookingFormValues = {
    ...initBookingFormStep1(),
    ...initBookingFormStep2(),
    ...initBookingFormStep3()
  }
  
  return form;
}