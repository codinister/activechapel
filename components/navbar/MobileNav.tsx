'use client';

import { Title } from '@radix-ui/react-dialog';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import navData from './navData';
import { CiMenuFries } from 'react-icons/ci';
import animDuration from '@/utils/animDuration';
import { motion } from 'motion/react';
import { variantOne } from '@/utils/animVariants';
import useGetQuery from '@/state/query/useGetQuery';
import { useState } from 'react';
import Link from 'next/link';

const MobileNav = () => {
  const data = navData;

  const sett = useGetQuery('settings', '/settings') || [];

  const [open, setOpen] = useState(false);

  return (
    <div className=" block md:hidden sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="px-6 py-1 flex items-center justify-between shadow-lg fixed top-0 left-0 z-10 bg-white w-full">
          <div>
            <SheetTrigger className="mt-2">
              <Title></Title>
              <CiMenuFries className="cursor-pointer text-2xl" />
            </SheetTrigger>
          </div>
          <div>
            <p>{sett[0] && sett[0]?.title}</p>
          </div>
        </div>
        <SheetContent side="left" className="p-6 w-[85%]">
          <div>
            {sett[0] ? (
              <Link href="/">
              <motion.img
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 2,
                    delay: 0.5,
                    ease: 'easeIn',
                  },
                }}
                src={sett[0]?.logo}
                width={70}
                height={60}
                alt=""
              />
              </Link>
            ) : (
              ''
            )}
            <ul className="mt-14">
              {data.map((v, k) => (
                <li key={k} className="mb-6">
                  <Link onClick={() => setOpen(false)} href={v.path}>
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
