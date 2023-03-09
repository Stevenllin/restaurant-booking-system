import React from 'react';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import { BookingStep1Props } from './types';

const BookingStep1: React.FC<BookingStep1Props> = (props) => {
  const { reset, getValues, register, watch, formState, trigger } = useFormContext<BookingFormValues>();
  return (
    <div className="d-flex flex-column align-items-center justify-content-between h-100 p-5">
      <p className="font-md color-white">Basic Information</p>
      <p>123</p>
      <button
        type="button"
        className="text-uppercase"
        onClick={() => props.setStep(1)}
      >
        next page
      </button>
    </div>
  )
}

export default BookingStep1;