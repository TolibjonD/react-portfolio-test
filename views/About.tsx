import { Button } from '@/components/Button';
import { ProjectsCard } from '@/components/ProjectsCard';
import { SocialLinks } from '@/components/SocialLinks';
import { Urbanist } from 'next/font/google'
import Image from 'next/image';
import React from 'react'

const urbanist = Urbanist({ subsets: ['latin'] });

export default function About() {
    return (
        <div id='#about' className={`border-t border-border min-h-screen py-10 ${urbanist.className}`}>
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
        </div>
    )
}
