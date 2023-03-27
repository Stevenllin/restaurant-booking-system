import React from 'react';
import { BookingStep2Props } from './types';

const BookingStep2: React.FC<BookingStep2Props> = (props) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between h-100">
      <p>BookingStep2</p>
      <p>123</p>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="text-uppercase button-main"
          onClick={() => props.setStep(-1)}
        >
          previous page
        </button>
        <button
          type="button"
          className="text-uppercase button-main"
          onClick={() => props.setStep(1)}
        >
          next page
        </button>
      </div>
    </div>
  )
}

export default BookingStep2;