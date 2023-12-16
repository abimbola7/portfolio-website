"use client"
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import { motion } from 'framer-motion';
import { animateVariant } from '@/components/hero';
// import useIn
import Link from 'next/link';

export default function Projects() {
  const projects  = useSelector(state=>state.projects.projects);
  return (
    <motion.div
    variants={animateVariant}
    initial="hidden"
    animate="visible"
    exit={"exitVariant"}
    className='flex-1 py-10'
    >
      <div className='relative w-full md:w-[75%] mx-auto'>
        <h1 className='sticky top-0 z-50 mt-5 text-lg font-thin uppercase md:text-2xl'>projects</h1>
        <div className='mt-5 space-y-8'>
          {
            projects.map((project, i)=>(
              <motion.div
              key={i}
              initial={{
                opacity : 0,
                x : "100%"
              }}
              whileInView={{
                opacity: 1,
                x : 0
              }}
              viewport={
                {
                  once : false
                }
              }
              transition={
                {
                  delay : .2,
                  duration : 1,
                  ease : "easeInOut",
                  type : "spring",
                  stiffness : "100"
                }
              }
              className="grid w-full grid-cols-1 px-4 py-5 tracking-wider border border-[#5f8f2a] md:grid-cols-3 dark:border-slate-700 backdrop-blur-2xl rounded-xl gap-y-4 md:gap-y-0 md:gap-x-4"
              >
                <div className="">
                  <Image 
                  src={project.imageUrl}
                  width={700}
                  height={700}
                  alt={"img"}
                  className="object-cover object-center h-full rounded-lg"
                  />
                </div>
                <div className='flex flex-col justify-between col-span-2 space-y-2'>
                  <div className='space-y-3'>
                    <h1 className="text-lg font-extrabold uppercase md:text-xl ">{project.name}</h1>
                    <p className='text-sm md:text-md'>{project.description}</p>
                    <div className='flex flex-wrap text-xs font-light uppercase md:text-sm '>
                      {
                        project.tools.map((tools, i)=>(
                          <span key={i} className="mr-2">{tools}</span>
                        ))
                      }
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <Link 
                    href={project.live_site} 
                    target="_blank"
                    className='flex items-center hover:text-[#f7801e]'
                    >
                    Live site
                    <GoLinkExternal className='ml-2'/>
                    </Link>
                    
                    <Link 
                    href={project.github_link} 
                    target="_blank"
                    className='flex items-center hover:text-[#f7801e]'
                    >
                    <FaGithub className='mr-2'/>
                    Github
                    <GoLinkExternal className='ml-2'/>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
        <div className='mt-5 text-sm md:text-xl'>
          <Link href="https://github.com/abimbola7?tab=repositories" target='_blank' className='flex items-center group w-fit'>
          View more on Github
          <MdOutlineArrowForward className='ml-1 transition-transform duration-200 group-hover:translate-x-2' />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
