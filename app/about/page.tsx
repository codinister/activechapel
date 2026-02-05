'use client';

import Aboutus from '@/components/Aboutus';
import Nurture from '@/components/Nurture';
import PageHeader from '@/components/PageHeader';

const About = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <Aboutus />
      <Nurture />
    </>
  );
};

export default About;
