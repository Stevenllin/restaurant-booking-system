import React from 'react';
import { BookingStep3Props } from './types';

const BookingStep3: React.FC<BookingStep3Props> = (props) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between h-100">
      <p>BookingStep2</p>
      <p>123</p>
      <div className="d-flex">
        <button
          type="button"
          className="text-uppercase"
          onClick={() => props.setStep(-1)}
        >
          previous page
        </button>
        <button
          type="button"
          className="text-uppercase"
          onClick={() => props.setStep(1)}
        >
          next page
        </button>
      </div>
    </div>
  )
}

export default BookingStep3;