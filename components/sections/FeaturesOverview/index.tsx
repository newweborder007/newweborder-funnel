"use client";

import ServiceCard from "@/components/widgets/ServiceCard";
import React from "react";
import { TDictionary } from "@/app/[[...lang]]/dictionaries";
import aRMobileLottie from "@/lotties/AR_Mobile_lottie.json";
import dShapeLottie from "@/lotties/3D_Shape03_lottie.json";
import generateAiLottie from "@/lotties/Generate_Ai_lottie.json";
import brainCheckLottie from "@/lotties/Brain_Check_lottie.json";
import augmentedRealityHuman from "@/lotties/Augmented_reality_Human-1_lottie.json";
import generateHumanLottie from "@/lotties/Generate_human_lottie.json";
import { motion } from "framer-motion";
import Badge from "@/components/widgets/Badge";

const FeaturesOverview = ({ data }: { data: TDictionary }) => {
  const lottieAnimations = [
    aRMobileLottie,
    dShapeLottie,
    generateAiLottie,
    brainCheckLottie,
    augmentedRealityHuman,
    generateHumanLottie,
  ];

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
    <motion.div
      className="flex flex-col gap-8 bg-transparent px-4 py-8 text-center lg:gap-12 lg:px-0 lg:py-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      id="solutions"
    >
      <motion.div className="flex flex-col gap-3 px-2 lg:px-0" variants={item}>
        <div className="flex w-full justify-center">
          <Badge
            text="Solutions"
            className="rounded-full border border-[#022C22] bg-gradient-to-t from-[#022c2299] to-[#022c2200] text-[#10B981]"
          />
        </div>
        <h2 className="font-orbitron mx-auto max-w-[44rem] text-2xl font-semibold tracking-[0.00625rem] text-[#ECEEED] lg:text-5xl lg:tracking-[0.015rem]">
          <span>{data.featuresSection.heading[0]}</span>
          <span className="text-[#23FA4B]">
            {data.featuresSection.heading[1]}
          </span>
          <span>{data.featuresSection.heading[2]}</span>
        </h2>
        <p className="mx-auto max-w-[35rem] text-sm font-medium tracking-[0.00438rem] text-[#D1D5DB] lg:text-base lg:tracking-[0.005rem]">
          {data.featuresSection.subheading}
        </p>
      </motion.div>
      <div className="grid-cols-1fr gay-y-4 mx-auto grid max-w-5xl gap-x-20 px-0 sm:px-6 lg:grid-cols-3 lg:gap-y-6 lg:px-0">
        {data.featuresSection.features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <ServiceCard
              key={index}
              animatedIconData={
                lottieAnimations[index % lottieAnimations.length]
              }
              title={feature.feature}
              description={feature.description}
              type="feature"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesOverview;
