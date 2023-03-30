import { BookingStep1Form } from './types';

export const initBookingFormStep1: () => BookingStep1Form = () => {
  const form: BookingStep1Form = {
    date: '',
    time: '',
    booker: {
      id: 1,
      name: '',
      phone: '',
      birthday: ''
    },
    others: []
  }
  return form;
}