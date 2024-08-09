"use client";

import React, { useEffect, useState } from "react";
import { TDictionary } from "@/app/[[...lang]]/dictionaries";
import ServiceCard from "@/components/widgets/ServiceCard";

import humanScienceLottie from "@/lotties/Human_Science_lottie.json";
import brainSignalsLottie from "@/lotties/Brain_Signals02_lottie.json";
import dObjectCubeLottie from "@/lotties/3D_Object_Cube_lottie.json";
import sphereArrowLottie from "@/lotties/Sphere_Arrow_lottie.json";

import firstArrow from "@/public/assets/icons/first-arrow.svg";
import secondArrow from "@/public/assets/icons/second-arrow.svg";
import thirdArrow from "@/public/assets/icons/third-arrow.svg";
import columnFirstArrow from "@/public/assets/icons/column-first-arrow.svg";
import columnSecondArrow from "@/public/assets/icons/column-second-arrow.svg";
import columnThirdArrow from "@/public/assets/icons/column-third-arrow.svg";

import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "@/components/widgets/Badge";

const OnBoardingProcess = ({ data }: { data: TDictionary }) => {
  const lottieAnimations = [
    humanScienceLottie,
    brainSignalsLottie,
    dObjectCubeLottie,
    sphereArrowLottie,
  ];
  const arrowImages = [firstArrow, secondArrow, thirdArrow];
  const columnArrows = [columnFirstArrow, columnSecondArrow, columnThirdArrow];

  const [currentArrows, setCurrentArrows] = useState(arrowImages);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCurrentArrows(columnArrows);
      } else {
        setCurrentArrows(arrowImages);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-transparent py-8 lg:py-16">
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center lg:gap-12 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        id="our-process"
      >
        <motion.div className="flex flex-col gap-4" variants={item}>
          <motion.div className="flex w-full justify-center">
            <Badge
              text="Our Process"
              className="rounded-full border border-[#3B0764] bg-gradient-to-t from-[#3b076499] to-[#3b076400] text-[#A855F7]"
            />
          </motion.div>
          <motion.h2 className="font-orbitron text-xl font-semibold tracking-[0.00625rem] text-[#ECEEED] lg:text-5xl lg:tracking-[0.015rem]">
            <span className="text-[#23FA4B]">
              {data.onBoardingSection.heading[0]}
            </span>
            <span> {data.onBoardingSection.heading[1]} </span>
          </motion.h2>
          <motion.p className="text-sm tracking-[0.00438rem] text-[#D1D5DB] lg:text-base lg:tracking-[0.005rem]">
            {data.onBoardingSection.subheading}
          </motion.p>
        </motion.div>
        <motion.div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
          {data.onBoardingSection.processes.map((process, index) => (
            <React.Fragment key={index}>
              <motion.div variants={item}>
                <ServiceCard
                  animatedIconData={
                    lottieAnimations[index % lottieAnimations.length]
                  }
                  title={process.process}
                  description={process.description}
                  type="onboarding"
                />
              </motion.div>
              {index < arrowImages.length && (
                <motion.div variants={item} className="lg:pt-[3.325rem]">
                  <Image src={currentArrows[index]} alt="right arrow" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OnBoardingProcess;
