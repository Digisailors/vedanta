"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Cardcarousel from "./Cardcarousel";
import Image from 'next/image';

export function ImagesSliderDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    './images/image1.jpg',
    './images/image2.png',
    './images/image3.jpeg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const getPositionClass = (index: number) => {
    switch (index % 3) {
      case 0:
        return 'items-start text-left';
      case 1:
        return 'items-center text-center';
      case 2:
        return 'items-end text-right';
      default:
        return 'items-start text-left';
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="relative h-[40rem] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <motion.div 
              className={`absolute inset-0 flex flex-col justify-center ${getPositionClass(currentIndex)}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="px-20">
              <h1 className="text-4xl text-white font-bold text-center">
  We will provide the <br />
  <span className="relative inline-block">
    best&nbsp;
    <span className="font-bodoni text-transparent bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text italic ">
      Industrial
    </span>
  </span>
  <span className="relative inline-block">
    &nbsp;service
  </span>
</h1>
                <p className="text-lg text-white mt-2 text-center">
                  We are the best guaranteed company to serve you.<br /> We are dedicated to help you any time.
                </p>
                <motion.div 
                  className={`mt-4 ${currentIndex % 3 === 1 ? 'justify-center' : currentIndex % 3 === 2 ? 'justify-end' : ''} flex`}
                >
                  <motion.button 
                    className="bg-green-600 hover:bg-blue-700 text-white px-4 py-2 flex items-center space-x-2 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Learn More</span>
                    <FaArrowRight />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-30"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowLeft className="text-black" />
        </motion.button>

        <motion.button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-30"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowRight className="text-black" />
        </motion.button>
      </div>
      <div className="absolute -bottom-20 w-full">
        <Cardcarousel />
      </div>
    </>
  );
}
