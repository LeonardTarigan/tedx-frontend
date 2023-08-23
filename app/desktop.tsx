'use client';
import Image from 'next/image';
import logo from '../public/assets/images/logo.png';
import xImage from '../public/assets/images/x5.png';

import Button from '@/components/shared/Button';
import Flower from '@/components/welcoming/Flower';
import Moon from '@/components/welcoming/Moon';
import Paint from '@/components/welcoming/Paint';
import { useXAnimation } from '@/utils/useXAnimation';
import { motion } from 'framer-motion';
import { SetStateAction } from 'react';

interface HomeDesktopProps {
  isClicked: boolean;
  setIsClicked: React.Dispatch<SetStateAction<boolean>>;
}

export default function HomeDesktop({
  isClicked,
  setIsClicked,
}: HomeDesktopProps) {
  const scope = useXAnimation(isClicked, 'desktop');

  const MotionButton = motion(Button);

  return (
    <main className="relative z-[2] h-screen overflow-hidden" ref={scope}>
      <div className="relative z-[3] w-[60%] h-screen ">
        <motion.div
          animate={{ top: '10%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[3] xl:top-[-50%] xl:left-[15%] w-[26%] el1 lg:left-[15%]">
          <Paint className="w-full h-fit" />
        </motion.div>
        <motion.div
          animate={{ left: '60%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[3] xl:top-[20%] xl:left-[200%] w-[26%] el2 lg:top-[20%]">
          <Moon className="w-full h-fit" />
        </motion.div>
        <motion.div
          animate={{ top: '60%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[3] xl:top-[100%] xl:left-[40%] w-[26%] el3 lg:left-[30%]">
          <Flower className="w-full h-fit" />
        </motion.div>
      </div>
      <video
        onEnded={isClicked ? () => console.log('finis') : () => ({})}
        className="absolute h-auto w-auto min-h-[100%] min-w-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] object-cover"
        autoPlay={true}
        loop={true}
        muted
        playsInline
        preload="auto">
        <source
          src={require('../public/assets/video/dummy.mp4')}
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 z-[1]  h-screen w-full">
        <div className="x">
          <Image
            src={xImage}
            alt="ximages"
            className="h-screen w-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="absolute top-[50%] right-[50%] translate-y-[-50%] translate-x-[100%] m-auto z-[5] text">
        <Image alt="images" src={logo} className="w-[320px] mb-[30px]" />
        <h1 className="text-white text-[24px] text-[700] mb-[30px] max-w-[550px] linux-libertine-slanted italic">
          {"'' "}Memantik Baskara: Tersulut Tak Membara, Terbakar Tak Bersuara{' '}
          {"'' "}
        </h1>
        <MotionButton
          as="button"
          onClick={() => setIsClicked(true)}
          type="primary">
          Pantikan Baskaramu
        </MotionButton>
      </div>
    </main>
  );
}
