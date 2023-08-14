import Image from "next/image";

// Components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar'

import { easeInOut, motion } from 'framer-motion';

import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">

      <div className="w-full pt-[10%] h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center  xl:text-left h-full container mx-auto">

          {/* Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1">
            Transformando Ideas <br /> en{' '}
            <span className="text-accent">Realidad Digital.</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit, labore perspiciatis quidem iure.
          </motion.p>

          {/* Button */}
          <div className=" flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* Bg Image */}
        <div className="bg-none md:bg-explosion md:bg-cover md:bg-right md:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>

        <ParticlesContainer />

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration : 1, ease : easeInOut}}
          className="w-full h-full max-w-[587px] max-h-[488px] absolute -bottom-32 lg:bottom-0 lg:right-[3%]">
          <Avatar />
        </motion.div>

      </div>
    </div>
  )
};

export default Home;
