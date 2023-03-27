import { BookingStep1 } from 'app/common/components/Feature/Booking/BookingStep1/types';
import { BookingStep2 } from '../BookingStep2/types';
import { BookingStep3 } from '../BookingStep3/types';

export interface BookingFormValues extends BookingStep1, BookingStep2, BookingStep3 {}