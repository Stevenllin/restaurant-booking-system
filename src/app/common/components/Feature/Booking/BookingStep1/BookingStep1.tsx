import React from 'react';
import { BookingStep1Props } from './types';

const BookingStep1: React.FC<BookingStep1Props> = (props) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between h-100">
      <p>BookingStep1</p>
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