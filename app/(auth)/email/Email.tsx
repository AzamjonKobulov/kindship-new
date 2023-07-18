'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';

const FullName = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;

    setIsTyping(newEmail.length === 0);
    setEmail(newEmail);
  };

  // Reset Email Input
  const resetEmailInput = () => {
    setEmail('');
    setIsTyping(false);
    setValidEmail(false);
    inputRef.current?.focus();
  };

  const navigateNextPage = () => {
    if (email !== 'correct@gmail.com') {
      setValidEmail(true);
    } else {
      router.push('/tariff');
    }
  };

  useEffect(() => {
    if (validEmail && email.length === 0) {
      setValidEmail(false);
    }
  }, [email, validEmail]);

  return (
    <>
      <div
        className={`relative flex items-center text-body border-b space-x-2 ${
          validEmail ? 'border-brand-warning-red' : 'border-brand-gray-300'
        }`}
      >
        <label htmlFor="email" className="flex items-center pr-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={email}
          placeholder="What’s your email?"
          onChange={onEmailChange}
        />
        {email.length > 0 && (
          <button
            type="button"
            onClick={resetEmailInput}
            className="peer-focus:block peer-placeholder-shown:hidden"
          >
            <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
          </button>
        )}
      </div>
      {validEmail && (
        <p className="text-sm text-brand-warning-red my-2">
          Oops, that doesn't look right. Please try again.
        </p>
      )}
      <Button
        onClick={navigateNextPage}
        disabled={isTyping}
        className="mt-5 md:mt-7"
      >
        Next
      </Button>
    </>
  );
};

export default FullName;
