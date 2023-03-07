import { BookingStep1 } from './BookingStep1/types';
import { BookingStep2 } from './BookingStep2/types';
import { BookingStep3 } from './BookingStep3/types';


export interface BookingForm extends BookingStep1, BookingStep2, BookingStep3 {}