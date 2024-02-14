"use client"
import { Changa } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { animateVariant } from '@/components/hero'
import { motion } from 'framer-motion'
import PageTransitionLayout from '../layouts/pageTransitionLayout'
const changa  = Changa({subsets : ['latin']})

export default function About() {
  const skills  = [
    { name : "HTML", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/1532556.png?alt=media&token=621f092f-5140-4a56-9370-c0e915b42a5d" },
    { name : "CSS", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/663980.png?alt=media&token=9b81ddb3-3595-4e96-b1f6-d4f62cb85d0a" },
    { name : "JavaScript", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/javascript-3.png?alt=media&token=84cd5446-8a13-4108-a0bb-4e6aab673e5f" },
    { name : "TailwindCSS", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/tailwindcss.png?alt=media&token=1236a4a5-fe91-4ff8-9b71-744c31e1f473" },
    { name : "Bootstrap", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/bootstrap-5-logo-icon.webp?alt=media&token=27232547-b228-4d7f-9503-fff687a8c2ec" },
    { name : "React js", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/React-icon.svg.png?alt=media&token=2d457011-e93e-4b56-945c-9755d6707fc1" },
    { name : "Next js", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/next-js-icon-512x512-zuauazrk.png?alt=media&token=468a5b4b-2ad9-4426-a402-06db307f783d" },
    { name : "Redux Toolkit", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/redux.png?alt=media&token=346a0920-bd02-4470-8df2-5040944a2783" },
    { name : "Sanity", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/sanity.webp?alt=media&token=10486638-77cc-4593-be21-bc4b9681f7d8" },
    { name : "Supabase", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/supabase.webp?alt=media&token=d42185d6-0e0f-42b2-affa-1c00075958bc" },
    { name : "Firebase", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/1_Cnv3NyPBLkabjYUBJuZnBw.png?alt=media&token=a87f24ae-f682-4d37-8127-688d957ec022" },
    { name : "MongoDB", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/mongodb_original_logo_icon_146424.png?alt=media&token=ad7c19fe-f18f-411b-ae38-087d55c07920" },
    { name : "Github", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/github1.png?alt=media&token=481777c4-eb41-4b6e-8d36-2066c9989e14" },
    { name : "Git", icons : "https://firebasestorage.googleapis.com/v0/b/portfolio-4742f.appspot.com/o/Git_icon.svg.png?alt=media&token=fab13d42-918d-4532-81e1-e86c6f4214e8" },

  ]
  return (
    // <PageTransitionLayout></PageTransitionLayout>
    <motion.div 
    variants={animateVariant}
    initial="hidden"
    animate="visible"
    exit={"exitVariant"}
    className='flex-1'>
      <h1 className='mt-5 text-lg font-thin uppercase md:text-2xl'>about</h1>
      <div className={`${changa.className} mt-2 md:mt-10`}>
        <p className='text-2xl font-extrabold md:text-6xl'>
          a mission driven frontend developer with a passion for thoughtful UI design and collaboration.
        </p>
      </div>

      <div className='grid w-full grid-cols-1 mt-2 md:grid-cols-2 md:mt-10 gap-x-5'>
        <div className="flex flex-col mt-5 space-y-4 text-sm md:text-lg">
          <p>I&apos;m a frontend developer based in Nigeria who is passionate about delivering value to businesses through technology. I love the challenge of finding creative solutions to problems.
          </p>

          <p>I am dedicated to keeping up-to-date with latest technologies and trends to provide the best solutions for clients.</p>

          <p>I pay great attention to detail in the design and development of my projects. My ultimate goal is to create software that is both user friendly and impactful in achieving the client&apos;s objectives.</p>
        </div>

        <div className="">
          <h1 className='my-5 text-lg font-thin text-left uppercase md:text-2xl md:text-center'>skills</h1>
          <div className="grid grid-cols-3 gap-3 mt-6 justify-items-center">
            {
              skills.map(skill=>(
                <div 
                className="flex flex-col items-center justify-center space-y-2"
                key={skill.name}>
                <Image
                src={skill.icons}
                width={20}
                height={20}
                alt={skill.icons} 
                />
                <p className="text-center">
                  {skill.name}
                </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}
