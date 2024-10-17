import React, { useState } from "react";
import Link from "next/link";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiPython,
  SiC,
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiVisualstudiocode,
  SiJira,
  SiWebpack,
  SiBitbucket,
  SiMongodb,
  SiMysql,
  SiPycharm,
  SiGit,
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaNodeJs />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<SiAdobexd /> ,<SiAdobephotoshop />],
      },
      {
        title: 'Programming languages',
        icons: [<SiCplusplus />, <SiPython />, <SiC />],
      },
      {
        title:'Tools/Platforms',
        icons:[
          <SiGit />,
          <SiVisualstudiocode />,
          <SiJira />,
          <SiWebpack />,
          <SiBitbucket />,
          <SiPycharm />,
        ]
      },
      {
        title:'Databases',
        icons:[
          <SiMongodb />,
          <SiMysql />
        ]
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: <Link href={'https://drive.google.com/file/d/1PsHPT0k1MME3USH_0Px-cSY_I06XOJHt/view'} className='hover:text-accent transition-all duration-300'>Certified Network Security Practitioner(CNSP)</Link>,
        stage: '2023',
      },
      {
        title: <Link href={'https://drive.google.com/file/d/1o3hUHcL0CyhVrFrU8rhzGfDWyRDgV_CY/view'} className='hover:text-accent transition-all duration-300'>Quantium Software Engineering Virtual Experience Program</Link>,
        stage: '2023',
      },
      {
        title: <Link href={'https://drive.google.com/file/d/1kMeD9hqu6jM1_yv6iNM0tZHSZLFEawC-/view'} className='hover:text-accent transition-all duration-300'>JP MPRGAN CHASE & CO. Software Enginnering Virtual Experience</Link>,
        stage: '2023',
      },
      {
        title: <Link href={'https://drive.google.com/file/d/1efLixHxBq47XrdttF912kV6X0ajMs1Vc/view'} className='hover:text-accent transition-all duration-300'>Basics-of-web-development</Link>,
        stage: '2022',
      },
      {
        title: <Link href={'https://drive.google.com/file/d/1FT9lMs5h_nF8VeKrhsJjax2L00TxH1gT/view'} className='hover:text-accent transition-all duration-300'>Android Development</Link>,
        stage: '2022',
      },
      {
        title: <Link href={'https://drive.google.com/file/d/1usyPcFs9MCjMbhdFwXyjqv3iYFf8yegU/view'} className='hover:text-accent transition-all duration-300'>Google Cloud</Link>,
        stage: '2022',
      },
      {
        title: <Link href={'https://drive.google.com/file/d/1pc808_AIsJQZihh0ou5efPYqFaDNqG8W/view'} className='hover:text-accent transition-all duration-300'>AWS</Link>,
        stage: '2023',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Q&A-Expert -CHEGG India',
        stage: '2023',
      },
      {
        title: 'Developer-MASTERINWEBS',
        stage: 'July 2023 - Sep 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'B.Tech CSE -Techno India University',
        stage: '2021-2025',
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion"; 
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0  -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className="conatainer mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/*text*/}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 relative "
          >
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 relative"
          >
            3 years ago, I began freelancing as a developer. Since then, I've done remote work for agencies, consulted for startups, and collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/*experience*/}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5} /> 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>
              {/* LeetCode Problem */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={200} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>LeetCode Problem Solved</div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={7} duration={5} /> 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/*info*/}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex)=>{
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex} 
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/*title*/}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                 </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
