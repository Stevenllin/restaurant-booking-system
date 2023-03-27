import React, { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { initBookingForm } from './form';
import { motion } from 'framer-motion';
import { BsPeopleFill } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import { FaWineGlass } from 'react-icons/fa';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import BookingStep1 from '../BookingStep1/BookingStep1';
import BookingStep2 from '../BookingStep2/BookingStep2';
import BookingStep3 from '../BookingStep3/BookingStep3';
import { BookingFormValues } from './types';

const BookingLayout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const reactHookForm = useForm<BookingFormValues>({
    defaultValues: initBookingForm()
  })

  console.log(reactHookForm.getValues());

  const handleSetCurrentStep = (number: number) => {
    setCurrentStep(currentStep + number)
  }
  
  const onSubmit = () => {
    console.log('onSubmit');
  }

  return (
    <>
      <div className="horizontal-line">
        <div className={'step-1 ' + (currentStep === 1 ? 'active' : '')}>
          <BsPeopleFill />
        </div>
        <div className={'step-2 ' + (currentStep === 2 ? 'active' : '')}>
          <GiMeal />
        </div>
        <div className={'step-3 ' + (currentStep === 3 ? 'active' : '')}>
          <FaWineGlass />
        </div>
        <div className={'step-4 ' + (currentStep === 4 ? 'active' : '')}>
          <RiMoneyPoundCircleFill />
        </div>
      </div>

      <motion.div
        className="homepage-container"
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1
          }
        }}
        initial="hidden"
        animate="visible"
      > 
        {/** 待釐清 */}
        {/** @ts-ignore */}
        <FormProvider {...reactHookForm}>
          <form onSubmit={reactHookForm.handleSubmit(onSubmit)}>
            {currentStep === 1 && <BookingStep1 />}
            {currentStep === 2 && <BookingStep2 />}
            {currentStep === 3 && <BookingStep3 />}

            {
              currentStep === 1 && (
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="text-uppercase button-main"
                    onClick={() => handleSetCurrentStep(1)}
                  >
                    next page
                  </button>
                </div>
              )
            }
            {
              currentStep === 2 && (
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="text-uppercase button-main"
                    onClick={() => handleSetCurrentStep(-1)}
                  >
                    previous page
                  </button>
                  <button
                    type="button"
                    className="text-uppercase button-main"
                    onClick={() => handleSetCurrentStep(1)}
                  >
                    next page
                  </button>
                </div>
              )
            }
            {
              currentStep === 3 && (
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="text-uppercase button-main"
                    onClick={() => handleSetCurrentStep(-1)}
                  >
                    previous page
                  </button>
                  <button
                    type="button"
                    className="text-uppercase"
                    onClick={() => handleSetCurrentStep(1)}
                  >
                    next page
                  </button>
                </div>
              )
            }
          </form>
        </FormProvider>
      </motion.div>
    </>
  )
}

export default BookingLayout;
