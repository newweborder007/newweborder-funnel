"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Logo from "@/components/widgets/Logo";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";
import data from "@/dictionaries/en.json";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmail } from "validator";

const ContactUs = () => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error(
      "EmailJS configuration is incomplete. Please check your environment variables.",
    );
    return;
  }
  const router = useRouter();

  const [email, setEmail] = useState("");

  var templateParams = {
    email: email,
  };

  const handleInputChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log("roun once");
    if (isEmail(email)) {
      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Form submitted successfully.", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        function (err) {
          console.log("FAILED...", err);
          toast.error("Invalid Email Address", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
      );
    } else {
      toast.error("Invalid Email Address", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setEmail("");
  };

  return (
    <>
      <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-8">
          <div onClick={() => router.push("/")}>
            <Logo className="h-[1.21406rem] w-[6.5625rem]" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-medium !leading-5 tracking-[0.00438rem] text-[#9CA3AF]">
                {data.contactUsSection.contactInformation.sectionHeader}
              </p>
              <p className="flex flex-col !leading-[1.3125rem] text-[#F3F4F6]">
                <span>
                  {data.contactUsSection.contactInformation.PhoneNumber}
                </span>
                <span>
                  {data.contactUsSection.contactInformation.emailAddress}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-[#06B6D4]">
              {data.contactUsSection.SocialMediaLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#0E7490]"
                >
                  {link.name === "facebook" && <FaFacebook />}
                  {link.name === "instagram" && <FaInstagram />}
                  {link.name === "twitter" && <FaXTwitter />}
                  {link.name === "linkedin" && <FaLinkedin />}
                  {/* {link.name === 'youtube' && <FaYoutube />} */}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 lg:w-[31.25rem]">
          <p className="font-roboto text-[#F3F4F6]">
            {data.contactUsSection.subscriptionNotice.callToAction}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Input
                required={true}
                value={email}
                onChange={handleInputChange}
                placeholder={data.contactUsSection.subscriptionNotice.inputText}
                type="email"
              />
              <Button
                type="button"
                shape="filled"
                size="default"
                width={100}
                onClick={(e) => handleSubmit(e)}
              >
                {data.contactUsSection.subscriptionNotice.buttonText}
              </Button>
            </div>
            <p className="font-roboto text-sm text-[#9CA3AF]">
              <span>
                {
                  data.contactUsSection.subscriptionNotice
                    .confirmationStatement[0]
                }
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Toast Container Positioned at Bottom-Right of Viewport */}
      <ToastContainer
        transition={Flip}
        position="bottom-right"
        autoClose={3000}
        limit={4}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="fixed bottom-4 right-4 z-50"
      />
    </>
  );
};

export default ContactUs;
