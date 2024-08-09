import React from "react";
import checkLine from "@/public/assets/icons/check-line.svg";
import Image from "next/image";
import Button from "../Button";

interface Feature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  buttonText: string;
  badge?: string;
  isActive: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  badge,
  isActive,
}) => {
  return (
    <div
      className={`flex flex-col gap-8 rounded-2xl border-2 p-8  ${badge ? "relative border-[#6d806b]" : "border-[#1f3722]"} max-w-[20.33331rem] bg-[#141714]`}
    >
      {badge && (
        <div className="absolute right-[6.35419rem] top-[-0.875rem] rounded-full bg-gradient-to-t from-[#9CA3AF] to-[#ECEEED] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.00375rem] text-[#030712]">
          {badge}
        </div>
      )}
      <div className="flex flex-col gap-3 border-b border-[#1F2937] pb-8 text-left">
        <h4 className="font-semibold tracking-[0.005rem] text-[#23FA4B]">
          {title}
        </h4>
        <p className="text-3xl font-semibold tracking-[0.00938rem] text-[#CFFAFE]">
          {price}
        </p>
        <p className="text-sm font-medium tracking-[0.00438rem] text-[#9CA3AF]">
          {description}
        </p>
      </div>
      <ul className="flex flex-col gap-4">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-2.5">
            <div className="rounded-full bg-[#022C22] p-1">
              <Image src={checkLine} alt="check line" />
            </div>
            <p className="text-sm tracking-[0.00438rem] text-[#D1D5DB]">
              {feature.text}
            </p>
          </li>
        ))}
      </ul>
      <a
        href={process.env.CTA_REDIRECT_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          shape={isActive ? "filled" : "surface"}
          size="small"
          width="100%"
        >
          {buttonText}
        </Button>
      </a>
    </div>
  );
};

export default PricingCard;
