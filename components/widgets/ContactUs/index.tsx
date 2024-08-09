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
import { isEmail } from "validator";
import { toast } from "react-toastify";
import Dropdown from "react-dropdown";
import Example from "../DropDown";
import MyModal from "../Dialog";

const ContactUs: React.FC = (): JSX.Element => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const [mailSuccess, setMailSuccess] = useState("");

  if (!serviceId || !templateId || !publicKey) {
    console.error(
      "EmailJS configuration is incomplete. Please check your environment variables.",
    );
    return <></>;
  }
  const router = useRouter();

  const budget_options = [
    "$5,000 - $9,999",
    "$10,000 - $24,999",
    "$25,000 - $49,999",
    "$50,000 - $74,999",
    "$75,000 - $99,999",
    "$100,000+",
  ];
  const defaultOptionBudget = budget_options[0];

  const projectDate_options = [
    "As soon as Possible",
    "In 1 month",
    "In 3 months",
    "In 6 months",
    "This year",
  ];
  const defaultOptionProjectDate = projectDate_options[0];

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [projectDate, setProjectDate] = useState(defaultOptionProjectDate);
  const [budget, setBudget] = useState(defaultOptionBudget);
  const [description, setDescription] = useState("");

  var templateParams = {
    email: email,
  };

  function handleFullNameChange(e: any) {
    const name = e.target.value;
    setFullName(name);
  }

  const handleInputChange = (e: any) => {
    setEmail(String(e.target.value));
  };

  const handleProjectDateChange = (e: any) => {
    setProjectDate(e.value);
  };

  const handleBudgetChange = (e: any) => {
    setBudget(e.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const validateAndSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      isEmail(email) &&
      fullName !== "" &&
      email !== "" &&
      projectDate !== "" &&
      budget !== "" &&
      description !== ""
    ) {
      // toast.success("Form submitted successfully.", {
      //   position: "bottom-right",
      //   autoClose: 3000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   // theme: "dark",
      // });

      var templateParams = {
        from_name: fullName,
        email: email,
        date: projectDate,
        budget: budget,
        description: description,
      };

      emailjs
        .send(
          "service_50x2xmj",
          "template_d4hbved",
          templateParams,
          "lLeW_FpD8ktMwiInd",
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            console.log("mail123");
          },
          function (err) {
            console.log("mail123 not sent");
            console.log("FAILED...", err);
          },
        );
      // console.table(formData);
      setFullName("");
      setEmail("");
      setProjectDate(defaultOptionProjectDate);

      setBudget(defaultOptionBudget);
      setDescription("");
    } else {
      toast.error("Invalid Email Address", {
        position: toast.POSITION.BOTTOM_RIGHT,
        // autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail("");
      console.log("asd");
    }
  };

  // const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   // emailjs.send("service_x8xzlm3", "template_za2tq2b", templateParams, "ggiJhlkvIWbcV1sQI")
  //   emailjs.send(serviceId, templateId, templateParams, publicKey).then(
  //     function (response) {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     function (err) {
  //       console.log("FAILED...", err);
  //     },
  //   );
  //   // console.log("IN EMAIL JS: ", email)
  //   setEmail("");
  // };

  return (
    <>
      {/* <MyModal /> */}
      <div className=" flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-16">
        <div className="flex flex-col justify-center gap-8">
          <div onClick={() => router.push("/")}>
            <Logo className="h-[1.21406rem] w-[6.5625rem]" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-medium !leading-5 tracking-[0.00438rem] text-[#ECEEED]">
                {data.contactUsSection.contactInformation.sectionHeader}
              </p>
              <p className="flex flex-col !leading-[1.3125rem] text-[#ECEEED]">
                <span>
                  {data.contactUsSection.contactInformation.PhoneNumber}
                </span>
                <span>
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
                  className="text-2xl hover:text-[#23fa4ad0]"
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

        <div className="custom-div2 w-full">
          <form
            className="form-container flex flex-col gap-y-8 px-10"
            onSubmit={validateAndSubmit}
            style={{ colorScheme: "dark" }}
          >
            <div className="input-row flex flex-col items-center justify-center gap-x-4 gap-y-4 md:flex-row md:gap-y-0">
              <div className="input-container flex w-full flex-col items-center gap-y-2">
                <div className="form-heading font-orbitron w-full">
                  Full Name
                </div>

                <input
                  required
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  maxLength={32}
                  value={fullName}
                  onChange={handleFullNameChange}
                  style={{
                    color: "#ECEEED",
                    width: "100%",
                    borderRadius: "5px",
                    backgroundColor: "#141716",
                  }}
                />
              </div>

              <div className="input-container flex w-full flex-col items-center gap-y-2">
                <div className="form-heading font-orbitron w-full">Email</div>
                <input
                  required
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="johndoe@example.com"
                  maxLength={64}
                  value={email}
                  onChange={handleInputChange}
                  style={{
                    color: "#ECEEED",
                    width: "100%",
                    borderRadius: "5px",
                    backgroundColor: "#141716",
                  }}
                />
              </div>
            </div>
            <div className="input-row flex flex-col items-center justify-center gap-x-4 gap-y-4 md:flex-row md:gap-y-0">
              <div className="input-container flex w-full flex-col items-center gap-y-2">
                <div className="form-heading font-orbitron w-full">
                  Estimated Project Start Date
                </div>

                <div className="dropdown-wrapper w-full">
                  {/* <Dropdown
                    className=""
                    controlClassName="dropdown-btn-container flex flex-row items-center justify-between   rounded-md border-[1px] border-[#ECEEED] p-2"
                    menuClassName="drop-menu"
                    placeholderClassName="placeholer"
                    options={projectDate_options}
                    arrowClosed={arrowClosed}
                    arrowOpen={arrowOpen}
                    value={projectDate}
                    onChange={handleProjectDateChange}
                  /> */}
                  <Example
                    title={defaultOptionProjectDate}
                    options={projectDate_options}
                    onchange={handleProjectDateChange}
                  />
                </div>
              </div>
              <div className="input-container flex w-full flex-col items-center gap-y-2">
                <div className="form-heading font-orbitron w-full">Budget</div>

                <div className="dropdown-wrapper w-full ">
                  {/* <Dropdown
                    className="drop-menu-main"
                    controlClassName="dropdown-btn-container flex flex-row items-center justify-between   rounded-md border-[1px] border-[#ECEEED] p-2"
                    menuClassName="drop-menu"
                    placeholderClassName="placeholer"
                    options={budget_options}
                    arrowClosed={arrowClosed}
                    arrowOpen={arrowOpen}
                    value={budget}
                    onChange={handleBudgetChange}
                  /> */}
                  <Example
                    title={defaultOptionBudget}
                    options={budget_options}
                    onchange={handleBudgetChange}
                  />
                </div>
              </div>
            </div>
            <div className="input-container flex flex-col items-center justify-center">
              <div className="form-heading font-orbitron w-full">
                Brief description of your project scope
              </div>
              {/* <textarea
              required
              // maxLength="1000"
              type="text"
              name="description"
              className="form-text-area"
              placeholder={"asd"}}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea> */}
              <textarea
                required
                maxLength={1000}
                typeof="text"
                className="form-text-area h-[120px] w-[100%] rounded-[5px] bg-[#141716] p-[10px] text-[#ECEEED]"
                placeholder={"Maximum of 1000 characters"}
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>

            <div className="form-submit-inner-container1 flex justify-end">
              <Button shape="filled" size="default" width={"70%"}>
                <input
                  type="submit"
                  value="Send Details"
                  className="form-submit h-full w-full bg-slate-600 bg-transparent hover:cursor-pointer "
                />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
