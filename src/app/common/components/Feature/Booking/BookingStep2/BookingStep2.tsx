import React, { useState, useEffect } from 'react';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import { BookingStep2Props } from './types';

const BookingStep2: React.FC<BookingStep2Props> = (props) => {
  const { reset, getValues, register, watch, formState, trigger, setValue } = useFormContext<BookingFormValues>();
  const [customers, setCustomers] = useState<string[]>([]);

  useEffect(() => {
    const array = getValues('others')?.map(other => other.name) ?? [];
    array.push(getValues('booker.name'))
    setCustomers(array)
  }, [getValues])

  console.log('customers', customers);
  return (
    <form className="d-flex flex-column justify-content-between h-100 p-5">
      <p className="font-md text-center color-white">Book your set</p>
      <div className="booking-step2-content">
        {
          customers.map(customer => (
            <div key={customer}>
              <p className="color-main font-md"><span>Customer : </span>{customer}</p>
              <p className="title-main">Starter</p>
              <div className="d-flex justify-content-center">
                <div className="food-container starter1">
                  123
                </div>
                <div className="food-container starter2">
                  123
                </div>
                <div className="food-container starter3">
                  123
                </div>
              </div>
              <p className="title-main">Salad</p>
              <div className="d-flex justify-content-center">
                <div className="food-container salad1">
                  123
                </div>
                <div className="food-container salad2">
                  123
                </div>
                <div className="food-container salad3">
                  123
                </div>
              </div>
              <p className="title-main">Soup</p>
              <p className="title-main">Main</p>
              <p className="title-main">Beverage</p>
            </div>
          ))
        }
      </div>
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
    </form>
  )
}

export default BookingStep2;