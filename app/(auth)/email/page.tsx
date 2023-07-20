'use client';
import Link from 'next/link';
import { Arrowleft } from '@/app/components/Icons';
import Email from '@/app/(auth)/email/Email';
import useViewport from '@/app/hooks/useViewport';

const Connect = () => {
  const mainContentRef = useViewport();
  return (
    <>
      <div ref={mainContentRef} className="md:text-center">
        <Link
          href="/connect"
          className="inline-flex lg:hidden items-center text-brand-primary space-x-1.5"
        >
          <Arrowleft />
          <span className="text-[17px] leading-5">Back</span>
        </Link>
        <h2 className="font-sf-pro-display font-bold text-3xl leading-8 tracking-wide mt-4 lg:mt-0">
          What's your email?
        </h2>
        <p className="text-brand-gray-primary text-body leading-6 tracking-tight whitespace-pre-line mt-4 md:px-2">
          We'll send you a copy of the service agreement. (And important emails
          now and then)
        </p>
      </div>
      <div className="max-w-md mx-auto md:px-6 mt-8">
        <Email />
      </div>
    </>
  );
};

export default Connect;
