import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { FastPaymentIcon, FreeResourcesIcon, SupportIcon } from '../Icons';
import { Button } from '../Base';
import { useRouter } from 'next/navigation';

interface iLandingPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function LandingPopup({ open, setOpen }: iLandingPopupProps) {
  const [active, setActive] = useState<number>(1);
  const router = useRouter();

  const handleClick = () => {
    setActive(active + 1);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setActive(1);
    }, 700);
  };

  useEffect(() => {
    if (active == 4) {
      router.push('/login');
      setTimeout(() => {
        setActive(1);
      }, 1000);
    }
  }, [active, router]);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative max-w-[456px] w-full transform overflow-hidden bg-white rounded-4xl px-4 py-12 md:px-13 md:py-15">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="hover:bg-brand-gray-400/70 absolute top-0 right-0 transition-colors duration-200 focus:outline-none m-5 lg:m-8"
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  {active == 1 ? (
                    <Support />
                  ) : active == 2 ? (
                    <FastPayment />
                  ) : (
                    <FreeResources />
                  )}
                  <Button onClick={handleClick} className="mt-7">
                    {active > 2 ? 'Sing up' : 'Next'}
                  </Button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const Support = () => (
  <>
    <SupportIcon />
    <h2 className="text-2xl lg:text-3xl font-bold mt-3">Premium Support</h2>
    <p className="text-xl text-brand-gray-primary mt-3">
      Our support team (AKA "coaches") are parents who live and breathe
      disability. We'll help you make the most of the NDIS!
    </p>
  </>
);

const FastPayment = () => (
  <>
    <FastPaymentIcon />
    <h2 className="text-2xl lg:text-3xl font-bold mt-3">Fast Payments</h2>
    <p className="text-xl text-brand-gray-primary mt-3 px-5">
      We're all about fast painless plan management because we know you've got
      more important things to do.
    </p>
  </>
);

const FreeResources = () => (
  <>
    <div className="w-16 h-16 mx-auto">
      <FreeResourcesIcon />
    </div>
    <h2 className="text-2xl lg:text-3xl font-bold mt-3">Free Resources</h2>
    <p className="text-xl text-brand-gray-primary mt-3">
      Become the best advocate you can be! We've crowdsourced the very best
      advice and support tools from families kicking NDIS goals.
    </p>
  </>
);
