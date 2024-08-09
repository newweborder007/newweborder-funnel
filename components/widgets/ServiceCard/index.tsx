import React, { useState } from "react";
import Lottie from "lottie-react";
import styles from "./serviceCard.module.css";

interface ServiceCardProps {
  animatedIconData: object;
  title: string;
  description: string;
  type: "feature" | "onboarding";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  animatedIconData,
  title,
  description,
  type,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className={`flex flex-col items-start gap-3 bg-transparent text-white  ${type === "feature" ? "max-w-fit px-[1.95rem] py-6 text-left" : "px--0 max-w-[13rem] px-0 text-center lg:py-6"}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`${styles.lottie_container} ${type === "feature" ? "self-start" : "flex h-16 w-16 items-center justify-center self-center rounded-2xl border border-[#083344] p-[0.8235rem]"}`}
      >
        <Lottie
          animationData={animatedIconData}
          style={{ width: "100%", height: "100%" }}
          loop={isHovering}
          autoplay={isHovering}
        />
      </div>
      <h1
        className={`cursor-default text-xl font-semibold tracking-[0.00625rem] text-[#ECEEED] lg:text-2xl lg:tracking-[0.0075rem] ${type === "feature" ? "self-start" : "self-center"} font-orbitron`}
      >
        {title}
      </h1>
      <p className="cursor-default text-sm tracking-[0.00438rem] text-[#D1D5DB]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
