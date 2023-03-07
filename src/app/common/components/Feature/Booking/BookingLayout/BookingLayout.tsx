import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsPeopleFill } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import { FaWineGlass } from 'react-icons/fa';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import BookingStep1 from '../BookingStep1/BookingStep1';
import BookingStep2 from '../BookingStep2/BookingStep2';
import BookingStep3 from '../BookingStep3/BookingStep3';

const BookingLayout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const background = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  const handleSetCurrentStep = (number: number) => {
    setCurrentStep(currentStep + number)
  }
  
  return (
    <>
      <div className="horizontal-line">
        <div className="step-1 active">
          <BsPeopleFill />
        </div>
        <div className="step-2">
          <GiMeal />
        </div>
        <div className="step-3">
          <FaWineGlass />
        </div>
        <div className="step-4">
          <RiMoneyPoundCircleFill />
        </div>
      </div>

      <motion.div
        className="homepage-container"
        variants={background}
        initial="hidden"
        animate="visible"
      >
        {currentStep === 1 && <BookingStep1 setStep={handleSetCurrentStep} />}
        {currentStep === 2 && <BookingStep2 setStep={handleSetCurrentStep} />}
        {currentStep === 3 && <BookingStep3 setStep={handleSetCurrentStep} />}
      </motion.div>
    </>
  )
}

export default BookingLayout;
