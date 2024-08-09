import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface TestimonialCardProps {
  imageSrc: string | StaticImageData;
  name: string;
  role: string;
  testimony: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  name,
  role,
  testimony,
}) => {
  return (
    <div className="flex min-h-48 w-[28rem] flex-col gap-6 rounded-2xl border border-[#23FA4B] bg-gradient-to-t from-[#141716] to-[#141716] p-6">
      <div className="flex gap-3 ">
        <Image
          src={imageSrc}
          alt={name}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="text-left">
          <h5 className="font-medium text-[#ECEEED]">{name}</h5>
          <p className="text-sm tracking-[0.00438rem] text-[#9CA3AF]">{role}</p>
        </div>
      </div>
      <blockquote className="text-left text-sm tracking-[0.005rem] text-slate-300">
        “{testimony}”
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
