import './styles/globals.css';
import '@/public/fonts/fonts-local.css';
import { Poppins } from 'next/font/google';
import Sidebar from './components/Sidebar';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Kindship - You were never meant to do this alone!',
  description:
    'Kindship is a safe space for parents raising children with delays, neurodivergence, and disabilities to connect, find support and feel informed.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="font-sf-pro-text bg-brand-bg h-full">
        <main className="h-screen md:h-auto max-w-4xl xl:max-w-5xl mx-auto lg:flex items-start lg:space-x-10 xl:space-x-14 md:px-4 md:pt-14 pb-10">
          <Sidebar />
          <div className="relative flex-1 bg-white md:border border-brand-gray-divider shadow-base-container md:rounded-xl overflow-hidden px-4 py-5 md:p-10">
            {children}
          </div>
        </main>
        <footer className="w-56 md:hidden font-poppins text-sm px-4 py-7">
          <p>© 2023 Kindship</p>
          <div className="flex flex-wrap items-center text-brand-gray-500 gap-x-2 gap-y-1 mt-4">
            <Link
              className="hover:text-brand-primary duration-200  transition-colors "
              href="/"
            >
              About app
            </Link>
            <Link
              className="hover:text-brand-primary duration-200  transition-colors"
              href="/"
            >
              Privacy policy
            </Link>{' '}
            <br />
            <Link
              className="hover:text-brand-primary duration-200  transition-colors "
              href="/"
            >
              Terms
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
