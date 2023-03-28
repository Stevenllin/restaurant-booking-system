import { BookingStep1Form } from './BookingStep1/types';
import { BookingStep2Form } from './BookingStep2/types';
import { BookingStep3 } from './BookingStep3/types';


export interface BookingForm extends BookingStep1Form, BookingStep2Form, BookingStep3 {}