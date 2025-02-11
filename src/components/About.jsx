import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { github } from '../assets'
import { fadeIn, textVariant } from '../utils/motion'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max: 45, scale: 1, speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.dev variants={fadeIn("right", "spring", 0.5, 0.75)} className="mt-4">
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
        <motion.p variants={fadeIn("right", "spring", 0.5, 0.75)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I'm a quick learner and I'm always looking to expand my knowledge and skill set. I'm a team player and I'm excited to work with others to create amazing applications.I'm a software developer with a passion for creating web applications that are both functional and aesthetically pleasing. I have a strong background in front-end development, with a focus on creating responsive and user-friendly interfaces. I'm also experienced in back-end development, with a focus on creating secure and efficient applications.
          I'm a quick learner and I'm always looking to expand my skills and knowledge. I'm a team player and I'm always willing to help out my colleagues. I'm also a great problem solver and I'm always looking for ways to improve and innovate.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.dev>
    </>
  )
}

export default SectionWrapper(About, "about")