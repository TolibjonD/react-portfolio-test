import Image from 'next/image';
import React from 'react'

export type SkillsCardProps = {
    logoUrl: string;
    title: string;
    content: string;
}

export const SkillsCard = ({ logoUrl, title, content }: SkillsCardProps) => {
    return (
        <div className='border border-rose-500/80 h-60 sm:h-[344px] pt-16 sm:pt-28 px-4 sm:px-9 rounded-lg bg-rose-900/30'>
            <div className='flex flex-col gap-5'>
                <div className='w-10 h-10 relative border border-rose-500/80 rounded-lg mx-auto'>
                    <Image
                        src={logoUrl}
                        alt={title}
                        fill
                        className='object-contain scale-75'
                    />
                </div>
                <h1 className='text-rose-400 text-xl sm:text-2xl md:text-3xl'>{title}</h1>
                <p className='text-zinc-200 text-xs sm:text-sm w-full'>{content}</p>
            </div>
        </div>
    )
}
