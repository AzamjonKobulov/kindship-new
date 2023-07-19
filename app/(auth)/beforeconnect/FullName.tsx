'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';

const FullName = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [yOffset, setYOffset] = useState<number>(0);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleInputFocus = () => {
      // Check if the first name or last name input is focused and scroll the page if necessary
      if (
        firstNameRef.current &&
        document.activeElement === firstNameRef.current
      ) {
        scrollToRef(firstNameRef);
      } else if (
        lastNameRef.current &&
        document.activeElement === lastNameRef.current
      ) {
        scrollToRef(lastNameRef);
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

  const handleFirstNameBlur = () => {
    if (firstNameRef.current && !firstNameRef.current.value.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLastNameBlur = () => {
    if (lastNameRef.current && !lastNameRef.current.value.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  return (
    <>
      <div className="relative flex items-center text-body border-b space-x-2 border-brand-gray-300">
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
          onBlur={handleFirstNameBlur}
          ref={firstNameRef}
        />
        <button
          type="button"
          onClick={resetFirstNameInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      <div className="relative flex items-center text-body border-b  space-x-2 border-brand-gray-300">
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
          onBlur={handleLastNameBlur}
          ref={lastNameRef}
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

      <Button
        onClick={navigateNextPage}
        disabled={disabled}
        className="mt-5 md:mt-7"
      >
        Next
      </Button>
    </>
  );
};

export default FullName;
