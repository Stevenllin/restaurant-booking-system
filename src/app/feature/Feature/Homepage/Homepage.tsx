import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsPeopleFill } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import { FaWineGlass } from 'react-icons/fa';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';

const Homepage: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false);

  const background = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

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
            
            </motion.div>
          </>
        )
      }
    </div>
  )
}

export default Homepage