import React from 'react';
import Hero from './hero';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="min-h-screen bg-white">
        <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
          <div className="w-full max-w-lg text-center">
            <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
            <p className="font-bold text-[32px] mb-4">
              Oops! Looks like something went wrong
            </p>
            <p className="text-[18px] mb-4">
              Page cannot be found! We’ll have it figured out in no time.
            </p>
            <p className="text-[18px] mb-6">
              Meanwhile, check out these fresh ideas:
            </p>
            <Link href="/">
              <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b] transition-all">
                Go Back to Home
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
