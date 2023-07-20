'use client';
import Link from 'next/link';

import { Arrowleft } from '@/app/components/Icons';
import FullName from './FullName';
import useViewport from '@/app/hooks/useViewport';

const BeforeConnect = () => {
  const mainContentRef = useViewport();
  return (
    <>
      <div ref={mainContentRef} className="md:text-center">
        <Link
          href="/"
          className="inline-flex lg:hidden items-center text-brand-primary space-x-1.5"
        >
          <Arrowleft />
          <span className="text-[17px] leading-5">Back</span>
        </Link>
        <h2 className="font-sf-pro-display font-bold text-3xl leading-8 tracking-wide mt-4 lg:mt-0">
          Welcome! We're so happy you're here.
        </h2>
        <p className="text-brand-gray-primary text-body leading-6 tracking-tight whitespace-pre-line mt-4 md:px-2">
          What should we call you?
        </p>
      </div>
      <div className="max-w-md mx-auto md:px-6 mt-8">
        <FullName />
      </div>
    </>
  );
};

export default BeforeConnect;
