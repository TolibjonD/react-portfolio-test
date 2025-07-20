"use client"
import React from 'react'
import { Button } from './Button'
import { ArrowRight } from 'iconsax-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Projects } from '@/types/projects'



export const ProjectsCard = ({ title, category, projectPhotoUrl, projectUrl }: Projects) => {
    const router = useRouter();
    return (
        <div className="w-full">
            <div className='w-full relative bg-rose-900/30 h-48 sm:h-72 md:h-96 mb-5 rounded-lg overflow-hidden'>
                <Image
                    src={projectPhotoUrl}
                    alt={title}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4'>
                <Button className='w-full sm:w-auto border-rose-500/80 text-rose-400 hover:bg-rose-600/90 hover:text-white'>
                    {title}
                </Button>
                <Button className='w-full sm:w-auto border-rose-500/80 text-rose-400 hover:bg-rose-600/90 hover:text-white'>
                    {category}
                </Button>
                <Button
                    onClick={() => router.push(projectUrl)}
                    className='w-full sm:w-auto border-rose-500/80 text-rose-400 hover:bg-rose-600/90 hover:text-white'>
                    <span className='flex items-center justify-center gap-1.5'>
                        View project
                        <ArrowRight
                            size={18}
                            color='currentColor'
                            className='-rotate-45'
                        />
                    </span>
                </Button>
            </div>
        </div>
    )
}
