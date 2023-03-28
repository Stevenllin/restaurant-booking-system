import React from 'react';
import { BookingStep3Props } from './types';

const BookingStep3: React.FC<BookingStep3Props> = (props) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between h-100 p-5">
      <p className="font-md color-white">Anything else?</p>
      <p>123</p>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="text-uppercase button-main mx-1"
          onClick={() => props.setStep(-1)}
        >
          go back
        </button>
        <button
          type="button"
          className="text-uppercase button-main mx-1"
          onClick={() => props.setStep(1)}
        >
          next
        </button>
      </div>
    </div>
  )
}

export default BookingStep3;