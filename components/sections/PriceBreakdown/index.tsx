"use client";

import React from "react";
import { TDictionary } from "@/app/[[...lang]]/dictionaries";
import PricingCard from "@/components/widgets/PricingCard";
import { motion } from "framer-motion";
import Badge from "@/components/widgets/Badge";

const PriceBreakdown = ({ data }: { data: TDictionary }) => {
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
        id="pricing"
      >
        <motion.div
          className="font-orbitron mx-auto flex max-w-[48rem] flex-col gap-3 lg:gap-4"
          variants={item}
        >
          <motion.div className="flex w-full justify-center">
            <Badge
              text="Pricing Plans"
              className="rounded-full border border-[#451A03] bg-gradient-to-t from-[#451a0300] to-[#451a0399] text-[#F59E0B]"
            />
          </motion.div>
          <motion.h2 className="font-orbitron text-xl font-semibold tracking-[0.00625rem] text-[#ECEEED] lg:text-5xl lg:tracking-[0.015rem]">
            <span>{data.pricingSection.heading[0]}</span>
            <span className="text-[#23FA4B]">
              {" "}
              {data.pricingSection.heading[1]}{" "}
            </span>
          </motion.h2>
          <motion.p className="text-sm tracking-[0.00438rem] text-[#D1D5DB] lg:text-base lg:tracking-[0.005rem]">
            {data.pricingSection.subheading}
          </motion.p>
        </motion.div>
        <div className="flex flex-col gap-6 lg:flex-row">
          {data.pricingSection.pricingOptions.map((option, index) => (
            <motion.div key={index} variants={item}>
              <PricingCard
                key={option.title}
                title={option.title}
                price={option.price}
                description={option.description}
                features={option.features}
                buttonText={option.buttonText}
                badge={option.badge}
                isActive={
                  index === data.pricingSection.pricingOptions.length - 1
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PriceBreakdown;
