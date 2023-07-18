'use client';

import { CheckIcon, XCircleIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const VerfyNumber = ({ phoneNumber }: any) => {
  const [value, setValue] = useState<string>('');
  const [correct, setCorrect] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [resendTimer, setResendTimer] = useState<number>(10);

  const router = useRouter();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;

    // JUST for UI checking
    // Will be refactored while intergrating api
    if (code.length === 6) {
      if (code === '777777') {
        setCorrect(true);
        setError(false);
        router.push('/beforeconnect');
      } else {
        setCorrect(false);
        setError(true);
      }
    } else {
      setCorrect(false);
    }

    setValue(code);
  };

  // Reset Input
  const resetInput = () => {
    setValue('');
    setCorrect(false);
    setError(false);
  };

  useEffect(() => {
    let timer: number | undefined;

    if (resendTimer > 0) {
      timer = window.setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [resendTimer]);

  return (
    <>
      <label
        htmlFor="verify-code"
        className={`relative flex items-center cursor-text border-b ${
          false ? 'border-brand-warning-red' : 'border-brand-gray-300'
        }`}
      >
        <input
          id="verify-code"
          type="text"
          maxLength={6}
          className={`${value ? 'w-20' : 'w-24'} text-body py-2.5`}
          placeholder="Enter code"
          onChange={handleOnchange}
          value={value}
        />
        {correct && <CheckIcon className="w-4 h-5 shrink-0 text-brand-hover" />}

        {value.length > 0 && (
          <button
            onClick={resetInput}
            type="button"
            className="absolute top-1/2 right-0 -translate-y-1/2 ml-auto"
          >
            <XCircleIcon className="w-5 h-5 text-brand-gray-primary" />
          </button>
        )}
      </label>

      <div className="mt-3">
        <div className="text-[#3C3C43]/60">
          <p className="inline-block">Didn't receive a code?</p>
          {'  '}
          {resendTimer > 0 ? (
            `Resend in ${resendTimer}s`
          ) : (
            <button type="button" className="text-brand-primary">
              Resend
            </button>
          )}
        </div>
        {error && (
          <p className="text-sm text-brand-warning-red my-1">
            Oops, that doesn't look right. Please try again
          </p>
        )}
      </div>
    </>
  );
};

export default VerfyNumber;
