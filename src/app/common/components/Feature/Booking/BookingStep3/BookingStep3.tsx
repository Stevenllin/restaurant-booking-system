import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BookingStep3Props, BookingStep3Form } from './types';

const BookingStep3: React.FC<BookingStep3Props> = (props) => {
  const reactHookForm = useForm<BookingStep3Form>({
    defaultValues: {
      beverage: []
    }
  })
  return (
    <form className="d-flex flex-column align-items-center justify-content-between h-100 p-5">
      <p className="font-md color-white">Anything beverage?</p>
      <div className="booking-step3-content">
        <p className="title-main">Cocktail</p>
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div className="beverage-container beverage2">
              <div className="beverage-operate">
                <AiOutlineMinus />
                <AiOutlinePlus />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p>PEAR + LEMON FIZZ</p>
              <p>9</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage4">
              <div className="beverage-operate">
                <AiOutlineMinus />
                <AiOutlinePlus />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p>Spiced Honey Bourbon Old Fashioned</p>
              <p>9</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage5">
              <div className="beverage-operate">
                <AiOutlineMinus />
                <AiOutlinePlus />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p>The Hermione Granger Cocktail</p>
              <p>9</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div className="beverage-container beverage6">
              <div className="beverage-operate">
                <AiOutlineMinus />
                <AiOutlinePlus />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p>Vampire Cynar Negroni</p>
              <p>9</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage7">
              <div className="beverage-operate">
                <AiOutlineMinus />
                <AiOutlinePlus />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p>Blood & Sand</p>
              <p>9</p>
            </div>
          </div>
          <div className="px-2">
            <div className="beverage-container beverage8">
              <div className="beverage-operate">
                <AiOutlineMinus />
                <AiOutlinePlus />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p>Gin Basil Smash</p>
              <p>9</p>
            </div>
          </div>
        </div>

        <p className="title-main">Soft Drink</p>
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div className="beverage-container beverage3">
              <div className="beverage-operate">
                <AiOutlineMinus />
                <AiOutlinePlus />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p>Watermelon Strawberry Lemonade</p>
              <p>9</p>
            </div>
          </div>
        </div>

        <p className="title-main">Coffee & Tee</p>
        <div className="d-flex justify-content-center">
          <div className="px-2">
            <div className="beverage-container beverage1">
              <div className="beverage-operate">
                <AiOutlineMinus />
                <AiOutlinePlus />
              </div>
            </div>
            <div className="d-flex justify-content-between color-white font-sm">
              <p>Iced Matcha Latte</p>
              <p>9</p>
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
          onClick={() => props.setStep(1)}
        >
          next
        </button>
      </div>
    </form>
  )
}

export default BookingStep3;