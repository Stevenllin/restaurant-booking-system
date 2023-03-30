import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { initBookingForm } from './form';
import { motion } from 'framer-motion';
import { BsPeopleFill } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import { FaWineGlass } from 'react-icons/fa';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import BookingStep1 from '../BookingStep1/BookingStep1';
import BookingStep2 from '../BookingStep2/BookingStep2';
import BookingStep3 from '../BookingStep3/BookingStep3';
import BookingStep4 from '../BookingStep4/BookingStep4';
import { BookingFormValues } from './types';

const BookingLayout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const reactHookForm = useForm<BookingFormValues>({
    defaultValues: initBookingForm()
  })

  const handleSetCurrentStep = (number: number) => {
    setCurrentStep(currentStep + number)
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
          <div className="booking-layout-container">
            {currentStep === 1 && <BookingStep1 setStep={handleSetCurrentStep} />}
            {currentStep === 2 && <BookingStep2 setStep={handleSetCurrentStep} />}
            {currentStep === 3 && <BookingStep3 setStep={handleSetCurrentStep} />}
            {currentStep === 4 && <BookingStep4 />}
          </div>
        </FormProvider>
      </motion.div>
    </>
  )
}

export default BookingLayout;
