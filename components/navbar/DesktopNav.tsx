'use client';
import { usePathname } from 'next/navigation';
import navData from './navData';
import useGetQuery from '@/state/query/useGetQuery';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';
import animDuration from '@/utils/animDuration';
import { variantOne } from '@/utils/animVariants';

const DesktopNav = () => {
  const path = usePathname();
  const data = navData;
  const sett = useGetQuery('settings', '/settings') || [];

  const { scrollYProgress } = useScroll();
  const [getScroll, setScroll] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScroll(latest);
  });

  const { hiddenOne, visibleOne } = variantOne();

  return (
    <nav
      className={`z-10 w-full text-white fixed top-0 left-0 hidden md:block shadow-lg py-2 ${getScroll > 0.08 ? 'bg-white fixed top-0  left-0 w-full' : ''}`}
    >
      <div className="container flex gap-20 mx-auto ">
        <div>
          {sett[0] ? (
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 2,
                  delay: 1.5,
                  ease: 'easeIn',
                },
              }}
              src={sett[0]?.logo}
              width={70}
              height={60}
              alt=""
            />
          ) : (
            ''
          )}
        </div>
        <div className="flex items-center justify-start gap-10      flex-8">
          {data.map((v, k) => (
            <motion.a
              initial={hiddenOne}
              animate={visibleOne}
              transition={{
                delay: animDuration(k, 4) * 0.5,
                duration: 2,
                ease: 'easeIn',
              }}
              key={k}
              href={v.path}
              className={`${getScroll > 0.08 && 'text-black'}`}
            >
              {v.name}
            </motion.a>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <motion.a
            initial={hiddenOne}
            animate={visibleOne}
            transition={{
              delay: animDuration(0, 3) * 0.5,
              duration: 2,
              ease: 'easeIn',
            }}
            href={sett[0]?.facebook}
            className={`${getScroll > 0.08 && 'text-black'}`}
          >
            <FaFacebook className="text-2xl" />
          </motion.a>

          <motion.a
            initial={hiddenOne}
            animate={visibleOne}
            transition={{
              delay: animDuration(1, 3) * 0.5,
              duration: 2,
              ease: 'easeIn',
            }}
            className={`${getScroll > 0.08 && 'text-black'}`}
            href={sett[0]?.instagram}
          >
            <FiInstagram className="text-2xl" />
          </motion.a>

          <motion.button
            initial={hiddenOne}
            animate={visibleOne}
            transition={{
              delay: animDuration(2, 3) * 0.5,
              duration: 2,
              ease: 'easeIn',
            }}
            className="bg-primary text-white text-center rounded-4xl px-4 py-2 cursor-pointer border-2 border-primary hover:bg-white hover:text-primary"
          >
            DONATE
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
