import React, { FC } from "react";
import logo from "@/public/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo: FC = () => (
  <div className="header-logo">
    <Link href="/" style={{ display: "flex", minWidth: "fit-content" }}>
      <div className="relative inline-block">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          style={{
            minWidth: "221px",
            width: "221px",
            height: "27px",
          }}
          src="/nwo-logo.svg"
          alt="New Web Order"
        />
        <motion.div
          animate={{ backgroundColor: ["#141716", "#23FA4B"] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-y-3 -right-5 bottom-0 top-6 flex w-[8%] items-center justify-center"
        >
          <div className="h-full w-full bg-opacity-50"></div>
        </motion.div>
      </div>
    </Link>
  </div>
);

export default Logo;
