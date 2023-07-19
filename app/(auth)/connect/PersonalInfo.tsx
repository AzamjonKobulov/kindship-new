'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';

const FullName = () => {
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [showError, setShowError] = useState(false);
  const [yOffset, setYOffset] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const ndisRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleInputFocus = () => {
      // Check if the first name or last name input is focused and scroll the page if necessary
      if (
        lastNameRef.current &&
        document.activeElement === lastNameRef.current
      ) {
        scrollToRef(lastNameRef);
      } else if (
        ndisRef.current &&
        document.activeElement === ndisRef.current
      ) {
        scrollToRef(ndisRef);
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

  const handleLastNameBlur = () => {
    if (lastNameRef.current && !lastNameRef.current.value.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNdisBlur = () => {
    if (ndisRef.current && !ndisRef.current.value.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValues = JSON.parse(
        localStorage.getItem('fullNameInputs') || '{}'
      );
      setLastName(storedValues.lastName || '');
      setNumber(storedValues.number || '');
      setDate(storedValues.date || '');
    }

    return () => {
      if (
        typeof window !== 'undefined' &&
        pathname &&
        pathname.includes('/connect/agreement')
      ) {
        localStorage.removeItem('fullNameInputs');
      }
    };
  }, [pathname]);

  useEffect(() => {
    formValidity();
  }, [lastName, number, date]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'fullNameInputs',
        JSON.stringify({ lastName, number, date })
      );
    }
  }, [lastName, number, date]);

  const formValidity = () => {
    if (lastName.trim() !== '' && number.length === 9 && date.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = e.target.value.replace(/\D/g, '');
    const formattedNumber = inputNumber.slice(0, 9);
    setNumber(formattedNumber);
    setShowError(
      inputNumber.length > 0 && formattedNumber.length !== inputNumber.length
    );
  };

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const resetLastNameInput = () => {
    setLastName('');
    inputRef.current?.focus();
  };

  const resetNumberInput = () => {
    setNumber('');
    setShowError(false);
    inputRef.current?.focus();
  };

  const navigateNextPage = () => {
    router.push('/email');
  };

  return (
    <>
      <div className="relative max-h-max overflow-auto flex items-center text-body border-b  space-x-2 border-brand-gray-300">
        <label htmlFor="last-name" className="flex items-center pr-2">
          Last Name
        </label>
        <input
          id="last-name"
          ref={lastNameRef}
          type="text"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={lastName}
          placeholder=" "
          onChange={onLastNameChange}
          onBlur={handleLastNameBlur}
        />
        <button
          type="button"
          onClick={resetLastNameInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      <div className="relative flex items-center text-body border-b  space-x-2 border-brand-gray-300">
        <label htmlFor="date-of-birth" className="flex items-center pr-2">
          Date of birth
        </label>
        <input
          id="date-of-birth"
          type="date"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={date}
          onChange={onDateChange}
        />
      </div>
      <div
        className={`relative flex items-center text-body border-b  space-x-2 ${
          showError ? 'border-brand-warning-red' : 'border-brand-gray-300'
        }`}
      >
        <label htmlFor="ndis-number" className="flex items-center pr-2">
          NDIS number
        </label>
        <input
          id="ndis-number"
          type="text"
          ref={ndisRef}
          maxLength={9}
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={number}
          placeholder=" "
          onChange={onNumberChange}
          onBlur={handleNdisBlur}
        />
        <button
          type="button"
          onClick={resetNumberInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      {showError && (
        <p className="text-sm text-brand-warning-red my-2">
          Oops, that doesn't look right. Please try again
        </p>
      )}
      <p className="text-brand-gray-primary tracking-tight my-2">
        Your child's NDIS number (this should be 9 digits). You'll be able to
        add more children later.
      </p>
      <Button
        disabled={disabled}
        onClick={navigateNextPage}
        className="mt-5 md:mt-7"
      >
        Agree and continue
      </Button>

      <div className="text-center">
        <p className="mt-5 tracking-tight font-sf-pro-display">
          By tapping "Agree and continue" you agree to our
        </p>
        <Link
          href="/connect/agreement"
          className="text-brand-primary underline underline-offset-4"
        >
          Service Agreement
        </Link>
      </div>
    </>
  );
};

export default FullName;
