"use client";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className='hidden lg:flex flex-col w-52 shrink-0 self-stretch font-poppins pt-7'>
      <div className='space-y-5'>
        <Link href='/'>
          <Image width={130} height={30} src='./logo.svg' alt='Kindship Logo' />
        </Link>
        <p className='text-lg leading-base'>
          Connect with parents who just get it!
        </p>
      </div>
      <div className='space-y-14 pt-32'>
        <div>
          <div>
            <Image
              src='/assets/images/qr-code.svg'
              width={100}
              height={100}
              alt='QR code'
            />
          </div>
          <h3 className='font-semibold leading-base mt-4'>
            Connect with parents who just get it!
          </h3>
          <p className='text-sm opacity-50 tracking-tight mt-1.5'>
            Available for IOS & Android
          </p>
        </div>
        <div className='space-y-4 text-sm tracking-tight'>
          <p>© 2023 Kindship</p>
          <div className='flex flex-wrap justify-center sm:justify-start items-center text-brand-gray-500 gap-x-2 gap-y-1'>
            <Link
              className='hover:text-brand-primary duration-200  transition-colors '
              href='/'>
              About app
            </Link>
            <Link
              className='hover:text-brand-primary duration-200  transition-colors'
              href='/'>
              Privacy policy
            </Link>
            <Link
              className='hover:text-brand-primary duration-200  transition-colors '
              href='/'>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
