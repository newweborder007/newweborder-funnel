"use client";

import React from "react";
import Logo from "@/components/widgets/Logo";
import { Disclosure } from "@headlessui/react";
import Button from "@/components/widgets/Button";
import { useRouter } from "next/navigation";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
// import Link from 'next/link';
import { TDictionary } from "@/app/[[...lang]]/dictionaries";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ data }: { data: TDictionary }) => {
  const router = useRouter();

  return (
    <>
      <a id="top"></a>
      <Disclosure as="nav" className="bg-transparent lg:flex">
        {({ open }) => (
          <>
            <div className="mx-auto w-full max-w-5xl px-2 lg:px-0">
              <div className="relative flex items-center justify-between py-5">
                <div className="absolute inset-y-0 left-0 flex w-full items-center justify-end lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <RiCloseLine
                        className="block h-6 w-6 text-[#23FA4B]"
                        aria-hidden="true"
                      />
                    ) : (
                      <RiMenuFill
                        className="block h-6 w-6 text-[#23FA4B]"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div
                  onClick={() => router.push("/")}
                  className="flex flex-1 cursor-pointer items-center"
                >
                  <Logo className="h-[1.21406rem] w-[6.5625rem]" />
                </div>
                <div className="ml-6 hidden flex-auto lg:ml-0 lg:block">
                  <div className="flex items-center justify-center gap-4 ">
                    {data.navbar.links.map((item) => (
                      <a key={item.name} href={item.href}>
                        <span
                          className={classNames(
                            "transition-duration: 150ms font-orbitron rounded-xl px-3 py-2 text-sm tracking-[0.00438rem]	transition-all hover:bg-green-950/40 hover:text-[#23FA4B]",
                            item.name
                              ? "text-[#ECEEED]"
                              : "text-[#23FA4B] underline",
                          )}
                          aria-current={item.name ? "page" : undefined}
                        >
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 hidden flex-1 items-center justify-end pr-2 lg:static lg:inset-auto lg:ml-0 lg:flex lg:pr-0">
                  {
                    <a
                      href={process.env.CTA_REDIRECT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Button shape="filled" size="small" width={118.4}>
                        {" "}
                        {data.navbar.buttonText}{" "}
                      </Button>
                    </a>
                  }
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden ">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {data.navbar.links.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.name ? "text-[#ECEEED]" : "text-[#23FA4B] underline",
                      "block rounded-md p-3 px-3 py-2 text-sm font-medium tracking-[0.00438rem] hover:text-[#23FA4B] hover:underline",
                    )}
                    aria-current={item.name ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
