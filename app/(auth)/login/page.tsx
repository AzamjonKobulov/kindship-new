'use client';
import Link from 'next/link';
import { Arrowleft } from '@/app/components/Icons';
import PhoneNumber from './PhoneNumber';
import { CheckIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import VerfyNumber from './VerfyNumber';

const Login = () => {
  const [verify, setVerify] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <>
      <div className="md:text-center">
        <Link
          href="/"
          className="inline-flex lg:hidden items-center text-brand-primary space-x-1.5"
        >
          <Arrowleft />
          <span className="text-[17px] leading-5">Premium</span>
        </Link>
        <h2 className="font-sf-pro-display font-bold text-3xl leading-8 tracking-wide mt-4 lg:mt-0">
          {!verify ? "Hey there! What's your number?" : ' Verify your number'}
        </h2>
        <p className="text-brand-gray-primary text-body leading-6 tracking-tight whitespace-pre-line mt-4 md:px-2">
          {!verify
            ? `Yep, we ask for it straight away. This helps us weed out the weirdos and keep you and your data safe. We'll send you an SMS message to double check we've got it right.`
            : `You should have a new message with verification code on \n +61 ${phoneNumber}. Please type the code below.`}
        </p>
      </div>

      <div className="max-w-md mx-auto md:px-6 mt-8">
        {!verify ? (
          <PhoneNumber {...{ phoneNumber, setPhoneNumber, setVerify }} />
        ) : (
          <VerfyNumber />
        )}
      </div>
    </>
  );
};

export default Login;
