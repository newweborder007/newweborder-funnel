"use client";

import React, { useState } from "react";
import Button from "@/components/widgets/Button";
import { TDictionary } from "@/app/[[...lang]]/dictionaries";
import ReactPlayer from "react-player";
import NoSsr from "@/components/widgets/NoSsr";
import styles from "./welcome.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const WelcomeBanner = ({ data }: { data: TDictionary }) => {
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

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const loadingSkeletonStyle = {
    backgroundColor: "#0B161A",
    height: "100%", // Adjust the height as needed
    width: "100%",
  };

  return (
    <div className="relative overflow-hidden bg-transparent py-24 lg:py-16">
      <div className="relative mx-auto w-full px-4 lg:max-w-5xl lg:px-0">
        <motion.div
          className="flex flex-col items-center justify-center gap-8 text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="mx-auto flex flex-col items-center gap-4 px-2 lg:max-w-[48rem] lg:px-0"
            variants={item}
          >
            <h1 className=" font-orbitron text-2xl font-semibold !leading-tight tracking-[0.0075rem] text-[#ECEEED] lg:text-5xl lg:tracking-[0.015rem]">
              <span className="">{data.heroSection.heading[0]}</span>
              <span className=" text-[#23FA4B] ">
                {" "}
                {data.heroSection.heading[1]}{" "}
              </span>
            </h1>
            <p className="max-w-screen-sm  text-sm text-[#D1D5DB] lg:text-lg">
              {data.heroSection.subheading}
            </p>
          </motion.div>
          <motion.div variants={item} className="py-6">
            <a
              href={process.env.CTA_REDIRECT_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button shape="filled" size="default" width={192}>
                {" "}
                {data.heroSection.buttonText}{" "}
              </Button>
            </a>
          </motion.div>
          <motion.div className={`h-auto w-3/5  ${styles.video_player}`}>
            <NoSsr>
              {!true && <div className={`${styles.skeleton_shimmer}`}></div>}
              {/* <ReactPlayer
                // url="http://www.youtube.com/watch?v=svIafaRgXnc"
                url={process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_LINK}
                className={styles.responsive_player}
                controls={true}
                onReady={() => setIsVideoLoaded(true)}
                style={{ display: isVideoLoaded ? "block" : "none" }}
              /> */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/newweborderhr"
                style={{
                  minWidth: "320px",
                  height: "700px",
                  display: true ? "block" : "none",
                }}
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
            </NoSsr>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
