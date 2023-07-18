'use client';
import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const PhoneNumber = ({ phoneNumber, setPhoneNumber, setVerify }: any) => {
  const [error, setError] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  // On Change
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    //   Checking first 3rd digit should be starts from 049 to move next.
    // Might be refactored while API integrating
    const regex = /^049\d{1}/;

    if (value.length > 9) {
      if (regex.test(value)) {
        setDisabled(false);
        setError(false);
      } else {
        setDisabled(true);
        setError(true);
      }
    } else {
      setDisabled(true);
      setError(false);
    }

    setPhoneNumber(value.replace(/[^0-9]/g, ''));
  };

  // OnSubmit
  const verifyPhoneNumber = () => {
    setVerify(true);
  };

  // Reset Input
  const resetInput = () => {
    setPhoneNumber('');
    inputRef.current?.focus();
    setError(false);
    setDisabled(true);
  };

  return (
    <>
      <div
        className={`relative flex items-center text-body border-b  space-x-2 ${
          error ? 'border-brand-warning-red' : 'border-brand-gray-300'
        }`}
      >
        <label htmlFor="phone-number" className="flex items-center space-x-2">
          <Image
            width={28}
            height={28}
            src="/assets/images/flag.png"
            alt="Australia Flag"
          />
          <span className="w-14 shrink-0">+61</span>
        </label>
        {/* Input */}
        <input
          ref={inputRef}
          id="phone-number"
          type="text"
          maxLength={10}
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          placeholder="Mobile number"
          value={phoneNumber}
          onChange={onChangeInput}
        />
        {/* Remove Btn */}
        {/* {phoneNumber.length > 0 && ( */}
        <button
          type="button"
          onClick={resetInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
        {/*  )} */}
      </div>
      {error && (
        <p className="text-sm text-brand-warning-red my-2">
          Oops, that doesn't look right. Please try again
        </p>
      )}

      <Button
        onClick={verifyPhoneNumber}
        disabled={disabled}
        className="mt-5 md:mt-7"
      >
        Next
      </Button>
    </>
  );
};

export default PhoneNumber;
