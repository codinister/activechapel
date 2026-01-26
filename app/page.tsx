'use client'
import Aboutus from '@/components/Aboutus';
import Founder from '@/components/Founder';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Weeklyactivities from '@/components/Weeklyactivities';
import Welcome from '@/components/Welcome';

const Home = () => {
  return (
    <>
      <Hero />
      <Founder />
      <Stats />
      <Welcome />
      <Weeklyactivities />
      <Aboutus />
   
    </>
  );
};

export default Home;
