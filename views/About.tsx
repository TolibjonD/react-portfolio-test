import { Button } from '@/components/Button';
import { ProjectsCard } from '@/components/ProjectsCard';
import { SkillsCard, SkillsCardProps } from '@/components/SkillsCard';
import { SocialLinks } from '@/components/SocialLinks';
import { ArrowLeft, ArrowRight, Play } from 'iconsax-react';
import { Urbanist } from 'next/font/google'
import Image from 'next/image';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'] });

const skills: SkillsCardProps[] = [
    {
        logoUrl: '/images/react.png',
        title: 'React',
        content: 'Understanding how to build modular, reusable components using React’s core principles like props, state, and hooks.'
    },
    {
        logoUrl: '/images/nextjs.png',
        title: ' Next.js',
        content: 'Using Next.js for server-side rendering (SSR), static site generation (SSG), and advanced routing features to build fast, SEO-friendly apps.'
    },
    {
        logoUrl: '/images/typescript.png',
        title: 'TypeScript',
        content: 'Writing type-safe code to improve developer experience, reduce bugs, and make applications more scalable and maintainable.'
    },
    {
        logoUrl: '/images/tailwind.png',
        title: 'Tailwind',
        content: 'Building modern, responsive UIs using tools like Tailwind CSS, CSS Modules, or styled-components to ensure clean and consistent design across devices.'
    },
    {
        logoUrl: '/images/api.png',
        title: 'API Integration',
        content: 'Fetching and managing data from RESTful or GraphQL APIs using tools like Axios, React Query, Zustand, or Redux Toolkit.'
    },
    {
        logoUrl: '/images/verify.png',
        title: 'Authentication & Security',
        content: 'Implementing secure authentication flows (JWT, cookies, OAuth) and protecting routes on both the client and server side.'
    },
]

export default function About() {
    return (
        <div id='about' className={`border-t border-border min-h-screen py-10 ${urbanist.className}`}>
            <div className='flex items-center justify-between px-20'>
                <p className={` text-base text-border`}>About Me</p>
                <SocialLinks />
            </div>
            <h1 className={` text-4xl font-medium text-my-text w-10/12 mt-14 px-20`}>
                Hi, I am Tolibjon! I'm a web developer with 3 years of web development
                experience with the past 1 years spent honing my skills in
                Reactjs, Nextjs. And Webflow.
            </h1>
            <div className='flex items-center justify-between px-20'>
                <h1 className={` text-3xl font-medium text-my-text mt-14 w-1/2`}>
                    I understand the importance of a Pixel-
                    perfect Website, pride myself on
                    producing high-quality websites, and I'm
                    comfortable working solo or as part of a
                    team.
                </h1>
                <div className=''>
                    <div className="relative w-[390px] h-[390px] rounded-full overflow-hidden">
                        <Image
                            src={"/images/heyUser.jpg"}
                            alt='My hero photo'
                            fill
                        // className='object-fill'
                        />
                    </div>
                </div>
            </div>
            <div className='mt-14 border-y border-line h-40 grid grid-cols-3'>
                <div className='flex flex-col justify-center border-r border-line px-20 gap-1.5'>
                    <h1 className={`font-bold text-2xl text-my-text `}>NAMMQI</h1>
                    <p className={` text-xl text-line`}>Backend developer - 2023</p>
                </div>
                <div className='flex flex-col justify-center px-20  border-r border-line gap-1.5'>
                    <h1 className={`font-bold text-2xl text-my-text `}>Upwork</h1>
                    <p className={` text-xl text-line`}>Full-Stack developer (freelancing) - 2023</p>
                </div>
                <div className='flex flex-col justify-center px-20 gap-1.5'>
                    <h1 className={`font-bold text-2xl text-my-text `}>Drizo Mobility</h1>
                    <p className={` text-xl text-line`}>Frontend developer - 2024</p>
                </div>
            </div>
            <div>
                <div className='px-20'>
                    <p className={` text-base text-border py-10`}>Featured Projects</p>
                    <h1 className='w-[811px] text-4xl text-my-text font-medium '>
                        I craft digital solutions that showcase my
                        passion and expertise in design and
                        development.
                    </h1>
                    <div className='grid grid-cols-2 gap-14 mt-16'>
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </div>
                    <div className='flex justify-center mt-10'>
                        <Button className='border border-line bg-[#141414]'>
                            Explore all the project
                        </Button>
                    </div>
                </div>
            </div>
            <div className="px-20 border-t border-line mt-10">
                <p className={` text-base text-border py-10`}>
                    What Do I Do And How?
                </p>
                <h1 className='w-[811px] text-4xl text-my-text font-medium '>
                    I love to craft functional solutions for
                    unique problems. These are some skills
                    I've picked up over my career.
                </h1>
                <div className='grid grid-cols-3 gap-14 mt-10'>
                    {skills.map((skill, idx) => (
                        <SkillsCard
                            key={idx}
                            logoUrl={skill.logoUrl}
                            title={skill.title}
                            content={skill.content}
                        />
                    ))}
                </div>
            </div>
            <div className="px-20 border-t border-line mt-10">
                <p className={` text-base text-border py-10`}>
                    what my clients say?
                </p>
                <h1 className='text-4xl font-medium'>Testimonial</h1>
                <div className='mt-5'>
                    <div className='flex gap-20 items-center'>
                        <div className='w-[596px] h-96 bg-rose-500 flex items-center justify-center'>
                            <button className='w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur cursor-pointer '>
                                <Play
                                    size={24}
                                    color="currentColor"
                                />
                            </button>
                        </div>
                        <div className='flex flex-col gap-10 w-[531px]'>
                            <h1 className='text-4xl text-my-text font-medium '>
                                I love to craft functional solutions for
                                unique problems. These are some skills
                                I've picked up over my career.
                            </h1>
                            <div>
                                <h4 className='text-xl font-semibold'>
                                    - Najmul Hasan
                                </h4>
                                <p className='text-border text-xs font-semibold ml-4 mt-2'>CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-5 mt-20'>
                        <button className='cursor-pointer'>
                            <ArrowLeft
                                size={20}
                                color='currentColor'
                            />
                        </button>
                        <button className='cursor-pointer'>
                            <ArrowRight
                                size={20}
                                color='currentColor'
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
