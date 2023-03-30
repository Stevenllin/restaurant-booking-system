import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { PlusAndMinusValueEnum } from 'app/core/enum/common';
import { BookingFormValues } from '../BookingLayout/types';
import { useFormContext } from 'react-hook-form';
import { BookingStep3Props, BookingStep3Form } from './types';

const BookingStep3: React.FC<BookingStep3Props> = (props) => {
  const { getValues, setValue } = useFormContext<BookingFormValues>();

  const reactHookForm = useForm<BookingStep3Form>({
    defaultValues: {
      beverage: []
    }
  })

  const handleBeverage = (action: PlusAndMinusValueEnum, beverage: string, price: number) => {
    const copied = reactHookForm.getValues('beverage').map(item => {
      return { ...item }
    });
    if (copied.find(item => item.name === beverage)) {
      const beverageUpdated = copied.map(item => {
        if (item.name === beverage) {
          if (action === PlusAndMinusValueEnum.Plus) {
            return { ...item, number: item.number + 1 }
          } else {
            if (item.number !== 0) {
              return { ...item, number: item.number - 1 }
            } else {
              return { ...item }
            }
          }
        } else {
          return { ...item }
        }
      })
      reactHookForm.setValue('beverage', beverageUpdated);
    } else {
      if (action === PlusAndMinusValueEnum.Plus) {
        copied.push({
          name: beverage,
          number: 1,
          price: price
        })
        reactHookForm.setValue('beverage', copied);
      }
    }
  }

  const handleSubmit = () => {
    const beverage = reactHookForm.getValues('beverage');
    setValue('beverage', beverage)
    props.setStep(1)
  }

  return (
    <form className="d-flex flex-column align-items-center justify-content-between h-100 p-5" onSubmit={reactHookForm.handleSubmit(handleSubmit)}>
      <p className="font-md color-white">Anything beverage?</p>
      <div className="booking-step3-content">
        <p className="title-main">Cocktail</p>
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div className="beverage-container beverage2">
              {reactHookForm.watch('beverage').filter(item => item.name === 'PEAR + LEMON FIZZ')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'PEAR + LEMON FIZZ')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'PEAR + LEMON FIZZ', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'PEAR + LEMON FIZZ', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Pear + Lemon Fizz</p>
              <p className="px-2">£11</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage4">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Spiced Honey Bourbon Old Fashioned')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Spiced Honey Bourbon Old Fashioned')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Spiced Honey Bourbon Old Fashioned', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Spiced Honey Bourbon Old Fashioned', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Spiced Honey Bourbon Old Fashioned</p>
              <p className="px-2">£12</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage5">
              {reactHookForm.watch('beverage').filter(item => item.name === 'The Hermione Granger Cocktail')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'The Hermione Granger Cocktail')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'The Hermione Granger Cocktail', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'The Hermione Granger Cocktail', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">The Hermione Granger Cocktail</p>
              <p className="px-2">£11</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div className="beverage-container beverage6">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Vampire Cynar Negroni')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Vampire Cynar Negroni')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Vampire Cynar Negroni', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Vampire Cynar Negroni', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Vampire Cynar Negroni</p>
              <p className="px-2">£12</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage7">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Blood & Sand')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Blood & Sand')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Blood & Sand', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Blood & Sand', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Blood & Sand</p>
              <p className="px-2">£11</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage8">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Gin Basil Smash')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Gin Basil Smash')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Gin Basil Smash', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Gin Basil Smash', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Gin Basil Smash</p>
              <p className="px-2">£10</p>
            </div>
          </div>
        </div>

        <p className="title-main">Soft Drink</p>
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div className="beverage-container beverage3">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Watermelon Strawberry Lemonade')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Watermelon Strawberry Lemonade')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Watermelon Strawberry Lemonade', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Watermelon Strawberry Lemonade', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Watermelon Strawberry Lemonade</p>
              <p className="px-2">£7</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage11">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Orange juice')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Orange juice')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Orange juice', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Orange juice', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Orange juice</p>
              <p className="px-2">£5</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage12">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Pineapple Coconut Smoothie')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Pineapple Coconut Smoothie')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Pineapple Coconut Smoothie', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Pineapple Coconut Smoothie', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Pineapple Coconut Smoothie</p>
              <p className="px-2">£7</p>
            </div>
          </div>
        </div>

        <p className="title-main">Coffee & Tea</p>
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div className="beverage-container beverage9">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Hot Latte')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Hot Latte')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Hot Latte', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Hot Latte', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Hot Latte</p>
              <p className="px-2">£5</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage1">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Iced Matcha Latte')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Iced Matcha Latte')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Iced Matcha Latte', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Iced Matcha Latte', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Iced Matcha Latte</p>
              <p className="px-2">£5</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage10">
              {reactHookForm.watch('beverage').filter(item => item.name === 'Moon Mike Tea')[0]?.number > 0 && (
                <div className="beverage-number">
                  <p>{reactHookForm.getValues('beverage').find(item => item.name === 'Moon Mike Tea')?.number}</p>
                </div>
              )}
              <div className="beverage-operate">
                <AiOutlineMinus onClick={() => handleBeverage(PlusAndMinusValueEnum.Minus, 'Moon Mike Tea', 9)} />
                <AiOutlinePlus onClick={() => handleBeverage(PlusAndMinusValueEnum.Plus, 'Moon Mike Tea', 9)} />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p className="px-2">Moon Mike Tea</p>
              <p className="px-2">£5</p>
            </div>
          </div>
        </div>
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
          type="submit"
          className="text-uppercase button-main mx-1"
        >
          next
        </button>
      </div>
    </form>
  )
}

export default BookingStep3;