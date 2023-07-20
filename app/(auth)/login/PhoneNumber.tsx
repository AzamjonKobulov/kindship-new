'use client';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

const PhoneNumber = ({ phoneNumber, setPhoneNumber, setVerify }: any) => {
  const [error, setError] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [yOffset, setYOffset] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleInputFocus = () => {
      // Check if the first name or last name input is focused and scroll the page if necessary
      if (inputRef.current && document.activeElement === inputRef.current) {
        scrollToRef(inputRef);
      }
    };

    const handleResize = () => {
      const newInnerHeight = window.innerHeight;
      const keyboardHeight = newInnerHeight - window.outerHeight;

      setYOffset(keyboardHeight > 0 ? keyboardHeight + 16 : 0);
    };

    window.addEventListener('resize', handleInputFocus);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleInputFocus);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlephoneNumberBlur = () => {
    if (inputRef.current && !inputRef.current.value.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
          onBlur={handlephoneNumberBlur}
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
