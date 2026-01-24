'use client';
import useGetQuery from '@/state/query/useGetQuery';
import { MdOutlineMail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import navData from './navbar/navData';
import animDuration from '@/utils/animDuration';
import { motion } from 'motion/react';
import { variantOne } from '@/utils/animVariants';

const Footer = () => {
  const sett = useGetQuery('settings', '/settings') || [];
  const mission = useGetQuery('mission', '/mission') || [];

  const data = navData;
  const { hiddenOne, visibleOne } = variantOne();

  return (
    <footer className="bg-secondary py-10">
      <div className="container p-6 md:p-0 mx-auto flex gap-15 flex-col md:flex-row">
        <div className="flex-1">
          <h5 className="text-muted mb-4">{sett[0]?.title}</h5>
          <p className="text-white opacity-75">{mission[0]?.content.excerpt}</p>
        </div>
        <div className="flex-1">
          <h5 className="text-muted  mb-4">Contact</h5>
          <ul className="text-white opacity-75">
            <li className="flex gap-4 items-center mb-4">
              <IoLocationOutline className="text-2xl text-primary" />
              <span>{sett[0]?.location}</span>
            </li>

            <li className="flex gap-4 items-center mb-4">
              <FaPhoneAlt className="text-2xl text-primary" />
              <span>{sett[0]?.phone1}</span>
            </li>

            <li className="flex gap-4 items-center mb-4">
              <MdOutlineMail className="text-2xl text-primary" />
              <span>{sett[0]?.email}</span>
            </li>

            <li className="flex gap-4 items-center mt-4">
              <a
                className="w-8 h-8 rounded-full  border-primary border-2 flex justify-center items-center hover:bg-white"
                href={sett[0]?.facebook}
                title={sett[0]?.facebook}
              >
                <FaFacebookF className="text-[16px] text-primary" />
              </a>
              <a
                className="w-8 h-8 rounded-full  border-primary border-2 flex justify-center items-center hover:bg-white"
                href={sett[0]?.instagram}
                title={sett[0]?.facebook}
              >
                <FaInstagram className="text-[16px] text-primary" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h5 className="text-muted  mb-4">Links</h5>

          <ul>
            {data.map((v, k) => (
              <li className="text-white mb-4" key={k}>
                <motion.a
                  initial={hiddenOne}
                  animate={visibleOne}
                  transition={{
                    delay: animDuration(k, 4) * 0.5,
                    duration: 2,
                    ease: 'easeIn',
                  }}
                  href={v.path}
                >
                  {v.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
