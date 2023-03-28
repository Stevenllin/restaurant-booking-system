import { BookingStep1Form } from 'app/common/components/Feature/Booking/BookingStep1/types';
import { BookingStep2Form } from '../BookingStep2/types';
import { BookingStep3Form } from '../BookingStep3/types';

export interface BookingFormValues extends BookingStep1Form, BookingStep2Form, BookingStep3Form {}
