import { BookingStep1 } from './types';

export const initBookingFormStep1: () => BookingStep1 = () => {
  const form: BookingStep1 = {
    date: '',
    booker: {
      name: '',
      phone: '',
      birthday: ''
    },
    others: []
  }
  return form;
}