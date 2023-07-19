'use client';

import { useRef, RefObject } from 'react';

const MyComponent: React.FC = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <input
        className="w-64 mx-auto py-2 px-2 border"
        ref={inputRef}
        type="text"
      />
      <button
        className="border w-40 mx-auto mt-5 rounded py-2 font-semibold text-white bg-brand-primary"
        onClick={handleButtonClick}
      >
        Focus Input
      </button>
    </div>
  );
};

export default MyComponent;
