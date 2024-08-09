"use client";

import React, { useEffect, useState } from "react";
import { TDictionary } from "@/app/[[...lang]]/dictionaries";
import TestimonialCard from "@/components/widgets/TestimonialCard";
import InfiniteCarousel from "@/components/widgets/InfiniteCarousel";
import Button from "@/components/widgets/Button";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  testimony: string;
  imageSrc: string;
}

const ClientReviews = ({ data }: { data: TDictionary }) => {
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
    <div className="overflow-hidden bg-transparent py-8 lg:py-16">
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center lg:gap-12 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="font-orbitron mx-auto flex max-w-[48rem] flex-col gap-3 lg:gap-4"
          variants={item}
        >
          <h2 className="text-xl font-semibold tracking-[0.015rem] text-[#ECEEED] lg:text-5xl">
            <span>{data.clientReviewsSection.heading[0]}</span>
            <span className="text-[#23FA4B]">
              {" "}
              {data.clientReviewsSection.heading[1]}{" "}
            </span>
          </h2>
          <p className="text-sm tracking-[0.005rem] text-[#D1D5DB] lg:text-base">
            {data.clientReviewsSection.subheading}
          </p>
        </motion.div>
        <InfiniteCarousel speed={95} direction="left">
          {data.clientReviewsSection.reviews.map((review, index) => (
            <div key={index} className="mx-4">
              <TestimonialCard
                key={index}
                imageSrc={review.image}
                name={review.name}
                role={review.role}
                testimony={review.testimony}
              />
            </div>
          ))}
        </InfiniteCarousel>
        <motion.div variants={item}>
          <a
            href={process.env.CTA_REDIRECT_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button shape="filled" size="default" width={192}>
              Schedule a Demo
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientReviews;
