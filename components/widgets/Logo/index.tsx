import React, { FC } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '', ...props }) => (
  <div className={className} {...props}>
    <Image
      src={logo}
      alt="Logo"
      // layout="responsive"
      width={100}
      height={100}
    />
  </div>
);

export default Logo;
