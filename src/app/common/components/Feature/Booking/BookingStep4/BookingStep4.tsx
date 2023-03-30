import React, { useState, useEffect } from 'react';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import commonService from 'app/core/service/commonService';
import { BookingStep4Summary } from './types';

const BookingStep4: React.FC = () => {
  const { getValues } = useFormContext<BookingFormValues>();
  const [summary, setSummary] = useState<BookingStep4Summary>();

  useEffect(() => {
    (() => {
      const { period, booker, others, meals, beverage } = getValues()
      const customers = []
      customers.push(booker)
      if (others) {
        others.forEach(other => {
          customers.push(other)
        })
      }
      setSummary({ period, customers, meals, beverage })
    })()
  }, [getValues])

  console.log('summary', summary)

  return (
    <div className="d-flex flex-column align-items-center justify-content-between h-100 p-5">
      <p className="font-md color-white">Check your order</p>
      <div className="booking-step4-content">
        <div className="d-flex justify-content-start">
          <p className="title">Date</p>
        </div>
        <div className="d-flex justify-content-end">
          <p className="font-md color-main">{summary?.period}</p>
        </div>
        <div className="d-flex justify-content-start">
          <p className="title">Meals</p>
        </div>
        {
          summary?.meals.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="d-flex justify-content-between">
                <p className="font-md color-main">{summary.customers[index].name} ( {commonService.convertAge(summary.customers[index].birthday)} )</p>
                <p className="font-md color-main">45</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-main">{item.starter}</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-main">{item.salad}</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-main">{item.soup}</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-main">{item.main}</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-main">{item.dessert}</p>
              </div>
            </div>
          ))
        }
        <div className="d-flex justify-content-start">
          <p className="title">Beverage</p>
        </div>
        {
          summary?.beverage.map((item) => (
            <div key={item.name} className="d-flex justify-content-between">
              <p className="font-md color-main">{item.name}</p>
              <p className="font-md color-main">{item.price} x {item.number} = {commonService.multiply(item.price, item.number)}</p>
            </div>
          ))
        }
      </div>
      <div className="d-flex">
        <button
          type="button"
          className="text-uppercase button-main"
        >
          submit
        </button>
      </div>
    </div>
  )
}

export default BookingStep4;