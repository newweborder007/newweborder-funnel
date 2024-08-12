"use client";

import React, { FormEvent, useState } from "react";
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("roun once", isEmail(email));
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
            <Logo />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-notoSans font-medium !leading-5 tracking-[0.00438rem] text-[#ECEEED]">
                {data.contactUsSection.contactInformation.sectionHeader}
              </p>
              <p className="flex flex-col font-notoSans !leading-[1.3125rem] text-[#F3F4F6]">
                <span className="font-notoSans">
                  {data.contactUsSection.contactInformation.PhoneNumber}
                </span>
                <span className="font-notoSans">
                  {data.contactUsSection.contactInformation.emailAddress}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-[#23FA4B]">
              {data.contactUsSection.SocialMediaLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-[#17900e]"
                >
                  {link.name === "facebook" && <FaFacebook />}
                  {link.name === "instagram" && <FaInstagram />}
                  {link.name === "twitter" && <FaXTwitter />}
                  {link.name === "linkedin" && <FaLinkedin />}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 lg:w-[31.25rem]">
          <p className="font-notoSans text-[#F3F4F6]">
            {data.contactUsSection.subscriptionNotice.callToAction}
          </p>
          <div className="flex flex-col gap-4">
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => handleSubmit(e)}
            >
              <Input
                required
                value={email}
                onChange={handleInputChange}
                placeholder={data.contactUsSection.subscriptionNotice.inputText}
                type="email"
              />
              <Button type="submit" shape="filled" size="small" width={118.4}>
                {data.contactUsSection.subscriptionNotice.buttonText}
              </Button>
            </form>
            <p className="font-roboto font-notoSans text-sm text-[#ECEEED]">
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
