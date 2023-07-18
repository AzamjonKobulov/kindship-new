'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';

const FullName = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [formOffset, setFormOffset] = useState<number>(0);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'first-name') {
      const newFirstName = value.trim();
      setFirstName(newFirstName);
      setDisabled(newFirstName === '');
    } else if (name === 'last-name') {
      setLastName(value);
    }
  };

  // Reset FirstName Input
  const resetFirstNameInput = () => {
    setFirstName('');
    inputRef.current?.focus();
    setDisabled(true);
  };

  // Reset LastName Input
  const resetLastNameInput = () => {
    setLastName('');
    inputRef.current?.focus();
  };

  const navigateNextPage = () => {
    router.push('/connect');
  };

  useEffect(() => {
    const handleResize = () => {
      const { innerHeight } = window;
      const formBottom = inputRef.current!.getBoundingClientRect().bottom;
      setFormOffset(innerHeight - formBottom);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile: boolean = window.innerWidth <= 768;

  return (
    <>
      <div
        className={`relative flex items-center text-body border-b space-x-2 border-brand-gray-300 ${
          isMobile ? 'mb-5' : ''
        }`}
      >
        <label htmlFor="first-name" className="flex items-center pr-2">
          First Name
        </label>
        <input
          id="first-name"
          name="first-name"
          type="text"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={firstName}
          onChange={handleInputChange}
          placeholder=" "
          ref={inputRef}
        />
        <button
          type="button"
          onClick={resetFirstNameInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      <div
        className={`relative flex items-center text-body border-b space-x-2 border-brand-gray-300 ${
          isMobile ? 'mb-5' : ''
        }`}
      >
        <label htmlFor="last-name" className="flex items-center pr-2">
          Last Name
        </label>
        <input
          id="last-name"
          name="last-name"
          type="text"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={lastName}
          placeholder=" "
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={resetLastNameInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      <p className="text-brand-gray-primary tracking-tight my-2">
        Last name is optional
      </p>

      <div style={{ marginBottom: isMobile ? `${formOffset}px` : 0 }}>
        <Button
          onClick={navigateNextPage}
          disabled={disabled}
          className="mt-5 md:mt-7"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default FullName;
