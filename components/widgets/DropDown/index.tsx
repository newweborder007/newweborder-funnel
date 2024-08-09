"use client";
import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface Props {
  title: string;
  options: string[];
  onchange: (event: any) => void;
}

const Example = (props: Props) => {
  const arrowClosed = (
    <span className="arrow-closed flex items-center justify-center hover:cursor-pointer">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
          fill="#706F78"
        />
      </svg>
    </span>
  );

  const arrowOpen = (
    <span className="arrow-open hover:cursor-pointer">
      <svg
        style={{ transform: "rotate(180deg)" }}
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
          fill="#706F78"
        />
      </svg>
    </span>
  );

  const [title, setTitle] = useState(props.title);

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex w-full flex-row items-center justify-between rounded-md border-[1px] border-gray-600 p-2">
        {title}
        <MenuItems>{({ open }) => (open ? arrowOpen : arrowClosed)}</MenuItems>
      </MenuButton>
      <MenuItems className="absolute right-0 z-50 mt-2 w-full rounded-md border border-gray-600 shadow-lg">
        {props.options.map((option, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              <button
                className={`block w-full px-4 py-2 text-left ${active ? "bg-[#083815] text-white" : "bg-[#141716] text-white"}`}
                onClick={() => {
                  props.onchange(option);
                  setTitle(option);
                }}
              >
                {option}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
export default Example;
