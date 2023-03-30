import React, { useState, useEffect } from 'react';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import commonService from 'app/core/service/commonService';
import { BookingStep4Summary } from './types';

const BookingStep4: React.FC = () => {
  const { getValues } = useFormContext<BookingFormValues>();
  const [summary, setSummary] = useState<BookingStep4Summary>();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    (() => {
      let bill = 0
      const { period, booker, others, meals, beverage } = getValues()

      const customers = []
      customers.push(booker)
      if (others) {
        others.forEach(other => {
          customers.push(other)
        })
      }
      const customersUpdated = customers.map(customer => {
        const age = commonService.convertAge(customer.birthday)
        if (age <= 12) {
          bill = bill + 22.5
        }
        if (commonService.checkBirthday(customer.birthday)) {
          if (age > 12) {
            bill = bill + 36
          }
          return { ...customer, age: age, isBirthday: true }
        } else {
          if (age > 12) {
            bill = bill + 45
          }
          return { ...customer, age: age, isBirthday: false }
        }
      })

      beverage.forEach(item => {
        bill = bill + (item.number * item.price)
      })

      setSummary({ 
        customers: customersUpdated,
        period,
        meals,
        beverage
      })

      setTotal(bill)
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
        <div className="d-flex justify-content-end mb-5">
          <p className="font-md color-main">{summary?.period}</p>
        </div>
        <div className="d-flex justify-content-start">
          <p className="title">Meals</p>
        </div>
        {
          summary?.meals.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="d-flex justify-content-between">
                <p className="font-md color-main">{summary.customers[index].name} ( {summary.customers[index]?.age} )</p>
                {
                  summary.customers[index].age <= 12 && (
                    <p className="font-md color-main">£45 * 0.5 = £22.5 </p>
                  )
                }
                {
                  summary.customers[index].age > 12 && summary.customers[index].isBirthday && (
                    <p className="font-md color-main">£45 * 0.8 = £36 </p>
                  )
                }
                {
                  summary.customers[index].age > 12 && summary.customers[index].isBirthday === false && (
                    <p className="font-md color-main">£45</p>
                  )
                }
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-minor">{item.starter}</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-minor">{item.salad}</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-minor">{item.soup}</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-minor">{item.main}</p>
              </div>
              <div className="d-flex justify-content-end">
                <p className="font-md color-minor">{item.dessert}</p>
              </div>
            </div>
          ))
        }
        <div className="d-flex justify-content-start mt-5">
          <p className="title">Beverage</p>
        </div>
        {
          summary?.beverage.map((item) => (
            <div key={item.name} className="d-flex justify-content-between">
              <p className="font-md color-main">{item.name}</p>
              <p className="font-md color-main">{item.price} x {item.number} = £{commonService.multiply(item.price, item.number)}</p>
            </div>
          ))
        }
        <div className="d-flex justify-content-start mt-5">
          <p className="title">Total amount</p>
        </div>
        <div className="d-flex justify-content-end">
          <p className="font-lg color-main">£{total}</p>
        </div>
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