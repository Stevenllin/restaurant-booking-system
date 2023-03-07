import React, { useState } from 'react';
import BookingLayout from 'app/common/components/Feature/Booking/BookingLayout';

const Booking: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false);

  const handleSetDisplay = () => {
    setDisplay(true)
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      {
        display === false && (
          <button
            type="button"
            className="button-main font-md color-white text-uppercase"
            onClick={handleSetDisplay}
          >
            Book a table?
          </button>
        )
      }
      {
        display && (
          <BookingLayout />
        )
      }
    </div>
  )
}

export default Booking