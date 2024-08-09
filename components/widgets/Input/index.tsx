import React, { InputHTMLAttributes, ChangeEvent } from "react";
import cn from "classnames";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  className?: string;
  onChange: (value: string) => void;
}

const Input = ({ className, onChange, ...rest }: Props) => {
  const rootClassName = cn(
    "flex w-[12.4rem] lg:w-[22.1rem] h-10 flex-col justify-center items-center p-3 rounded-lg bg-[#23FA4B] border border-[#374151] text-[#ECEDEE] placeholder:text-[#9CA3AF] tracking-[0.00469rem] outline-none focus:ring-0 focus:outline-none focus:border-[#9CA3AF]",
    className,
  );

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  );
};

export default Input;
