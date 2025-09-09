"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface LogoProps {
  size?: number;
  alt?: string;
  src?: string;
  href?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 44,
  alt = 'Logo',
  src = '/logo.png',
  href = '/',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={href}
      aria-label={alt}
      className="inline-block overflow-hidden"
    >
      {hasError ? (
        <div
          style={{ width: size, height: size }}
          className="bg-black rounded flex items-center justify-centers"
          aria-label={alt}
        >
          <h2 className='text-white text-center mx-auto'>G</h2>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          priority
          className="object-contain"
          onError={() => setHasError(true)}
        />
      )}
    </Link>
  );
};

export default Logo;
