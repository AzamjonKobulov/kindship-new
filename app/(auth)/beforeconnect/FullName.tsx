'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';

const FullName = () => {
  const [formData, setFormData] = useState<{firstName: string, lastName: string}>({
    firstName: '',
    lastName: ''
  });
  const [disabled, setDisabled] = useState<boolean>(true);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value})
  };

  // Reset FirstName Input
  const resetFirstNameInput = () => {
    setFormData({firstName: '', lastName: formData.lastName});
    inputRef.current?.focus();
    setDisabled(true);
  };

  // Reset LastName Input
  const resetLastNameInput = () => {
    setFormData({firstName: formData.firstName, lastName: ''});
    inputRef.current?.focus();
  };

  const navigateNextPage = () => {
    router.push('/connect');
  };

  useEffect(() => {
    if(formData.firstName.trim() === ''){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  }, [formData.firstName])

  return (
    <>
      <div className="relative flex items-center text-body border-b space-x-2 border-brand-gray-300">
        <label htmlFor="first-name" className="flex items-center pr-2">
          First Name
        </label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder=" "
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
          name="lastName"
          type="text"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={formData.lastName}
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
