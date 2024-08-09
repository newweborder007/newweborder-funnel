"use client";

import React from "react";
import ContactUs from "../ContactUs";
import { motion } from "framer-motion";
import data from "@/dictionaries/en.json";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Footer = () => {
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
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.footer
      className="mx-auto flex w-full max-w-5xl flex-col justify-center gap-8 bg-transparent px-4 py-16 lg:gap-20 lg:px-0"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={item}>
        <ContactUs />
      </motion.div>
      <motion.div
        className="flex flex-col items-start gap-3 border-t-[1px]  border-[##66736D] pt-8 lg:flex-row lg:justify-between lg:gap-0"
        variants={item}
      >
        <p className="font-Urbanist flex flex-1 font-notoSans text-xs tracking-[0.00438rem] text-[#ECEEED] lg:text-sm">
          {data.footerSection.copyRight}
        </p>

        <div className="flex flex-1 justify-end gap-6">
          {data.footerSection.links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="  text-xs font-medium tracking-[0.00438rem] lg:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
