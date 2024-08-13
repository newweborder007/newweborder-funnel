import Image, { StaticImageData } from "next/image";
import React from "react";

interface BenefitCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
  layout?: "row" | "column";
  cardSize?: string;
  iconSize?: string;
  textAlignment?: string;
  iconCont?: string;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  layout,
  cardSize,
  iconCont,
  iconSize,
  textAlignment,
}) => {
  const flexDirection =
    layout === "column" ? "flex-col" : "flex-col lg:flex-row";
  return (
    <div
      className={`flex ${flexDirection} items-center text-center ${cardSize} gap-6 rounded-2xl border border-[#07190b] bg-gradient-to-t from-[#0d1b0f] to-[#141716] p-8`}
    >
      <div className={`flex ${iconCont}`}>
        <Image
          src={icon}
          alt={title}
          className={`object-contain object-center ${iconSize}`}
        />
      </div>
      <div className={`flex flex-1 flex-col gap-2 ${textAlignment}`}>
        <h4 className="font-orbitron text-base font-bold tracking-[0.005rem] text-[#ECEEED] lg:text-xl lg:tracking-[0.00625rem]">
          {title}
        </h4>
        <p className="font-notoSans text-sm tracking-[0.00438rem] text-[#D1D5DB] lg:text-base lg:tracking-[0.005rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
