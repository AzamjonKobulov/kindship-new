import Link from 'next/link';

import { Arrowleft } from '@/app/components/Icons';
import PersonalInfo from '@/app/(auth)/connect/PersonalInfo';

const Connect = () => {
  return (
    <>
      <div className="md:text-center">
        <Link
          href="/beforeconnect"
          className="inline-flex lg:hidden items-center text-brand-primary space-x-1.5"
        >
          <Arrowleft />
          <span className="text-[17px] leading-5">Back</span>
        </Link>
        <h2 className="font-sf-pro-display font-bold text-3xl leading-8 tracking-wide mt-4 lg:mt-0">
          This'll just take a minute.
        </h2>
        <p className="text-brand-gray-primary text-body leading-6 tracking-tight whitespace-pre-line mt-4 md:px-2">
          We need a couple of details to get you started.
        </p>
      </div>
      <div className="max-w-md mx-auto md:px-6 mt-8">
        <PersonalInfo />
      </div>
    </>
  );
};

export default Connect;
