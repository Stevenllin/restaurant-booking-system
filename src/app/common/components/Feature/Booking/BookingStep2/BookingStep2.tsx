import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import { BookingStep2Props, BookingStep2Form } from './types';

const BookingStep2: React.FC<BookingStep2Props> = (props) => {
  const { getValues } = useFormContext<BookingFormValues>();
  const [customers, setCustomers] = useState<string[]>([]);
  const reactHookForm = useForm<BookingStep2Form>({
    defaultValues: {
      meals: []
    }
  });

  useEffect(() => {
    const array = getValues('others')?.map(other => other.name) ?? [];
    array.push(getValues('booker.name'))
    setCustomers(array)
  }, [getValues])

  const handleSubmit = () => {
    console.log(reactHookForm.getValues());
    props.setStep(1)
  }

  return (
    <form className="d-flex flex-column justify-content-between h-100 p-5" onSubmit={reactHookForm.handleSubmit(handleSubmit)}>
      <p className="font-md text-center color-white">Book your set</p>
      <div className="booking-step2-content">
        {
          customers.map((customer, index) => (
            <div key={customer}>
              <p className="color-main font-md"><span>Customer{index + 1} : </span>{customer}</p>

              <p className="title-main">Starter</p>
              <div className="d-flex justify-content-center">
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.starter`)}
                    value="Smoked Salmon Carpaccio With Horseradish"
                  />
                  <div className="food-container starter1"></div>
                  <p className="color-white font-sm">Smoked Salmon Carpaccio With Horseradish</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.starter`)}
                    value="Prawn, Avocado Canapes with Chipotle Aioli"
                  />
                  <div className="food-container starter2"></div>
                  <p className="color-white font-sm">Prawn, Avocado Canapes with Chipotle Aioli</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.starter`)}
                    value="Poached egg with mushrooms a la Grecque and olive oil crisps"
                  />
                  <div className="food-container starter3"></div>
                  <p className="color-white font-sm">Poached egg with mushrooms a la Grecque and olive oil crisps</p>
                </label>
              </div>

              <p className="title-main">Salad</p>
              <div className="d-flex justify-content-center">
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.salad`)}
                    value="GREEN GODDESS POTATO SALAD"
                  />
                  <div className="food-container salad1"></div>
                  <p className="color-white font-sm">GREEN GODDESS POTATO SALAD</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.salad`)}
                    value="GREEN GODDESS POTATO SALAD"
                  />
                  <div className="food-container salad2"></div>
                  <p className="color-white font-sm">GREEN GODDESS POTATO SALAD</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.salad`)}
                    value="beef salad"
                  />
                  <div className="food-container salad3"></div>
                  <p className="color-white font-sm">beef salad</p>
                </label>
              </div>

              <p className="title-main">Soup</p>
              <div className="d-flex justify-content-center">
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.soup`)}
                    value="Thai Sweet Potato Carrot Soup"
                  />
                  <div className="food-container soup1"></div>
                  <p className="color-white font-sm">Thai Sweet Potato Carrot Soup</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.soup`)}
                    value="Creamy Moroccan Tomato Soup."
                  />
                  <div className="food-container soup2"></div>
                  <p className="color-white font-sm">Creamy Moroccan Tomato Soup.</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.soup`)}
                    value="Roasted Vegetable Soup"
                  />
                  <div className="food-container soup3"></div>
                  <p className="color-white font-sm">Roasted Vegetable Soup</p>
                </label>
              </div>

              <p className="title-main">Main</p>
              <div className="d-flex justify-content-center">
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.main`)}
                    value="smoked duck"
                  />
                  <div className="food-container main1"></div>
                  <p className="color-white font-sm">smoked duck</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.main`)}
                    value="Stuffed trout with chesnut cauliflower cream"
                  />
                  <div className="food-container main2"></div>
                  <p className="color-white font-sm">Stuffed trout with chesnut cauliflower cream</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.main`)}
                    value="Steak and Potatoes"
                  />
                  <div className="food-container main3"></div>
                  <p className="color-white font-sm">Steak and Potatoes</p>
                </label>
              </div>

              <p className="title-main">Dessert</p>
              <div className="d-flex justify-content-center">
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.dessert`)}
                    value="meyer lemon plated dessert"
                  />
                  <div className="food-container dessert1"></div>
                  <p className="color-white font-sm">meyer lemon plated dessert</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.dessert`)}
                    value="Salted caramel tart with banana and passion fruit sorbet"
                  />
                  <div className="food-container dessert2"></div>
                  <p className="color-white font-sm">Salted caramel tart with banana and passion fruit sorbet</p>
                </label>
                <label className="labl">
                  <input
                    type="radio"
                    {...reactHookForm.register(`meals.${index}.dessert`)}
                    value="RASPBERRY BAVAROIS WITH RASPBERRY SORBET"
                  />
                  <div className="food-container dessert3"></div>
                  <p className="color-white font-sm">RASPBERRY BAVAROIS WITH RASPBERRY SORBET</p>
                </label>
              </div>
            </div>
          ))
        }
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button
          type="button"
          className="text-uppercase button-main mx-1"
          onClick={() => props.setStep(-1)}
        >
          go back
        </button>
        <button
          type="submit"
          className="text-uppercase button-main mx-1"
        >
          next
        </button>
      </div>
    </form>
  )
}

export default BookingStep2;