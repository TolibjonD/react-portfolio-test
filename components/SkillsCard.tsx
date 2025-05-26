import Image from 'next/image';
import React from 'react'

export type SkillsCardProps = {
    logoUrl: string;
    title: string;
    content: string;
}

export const SkillsCard = ({ logoUrl, title, content }: SkillsCardProps) => {
    return (
        <div className='border border-line h-[344px] pt-28 px-9'>
            <div className='flex flex-col gap-5'>
                <div className='w-10 h-10 relative border border-line rounded-lg'>
                    <Image
                        src={logoUrl}
                        alt={title}
                        fill
                        className='object-contain scale-75'
                    />
                </div>
                <h1 className='text-my-text text-3xl'>{title}</h1>
                <p className='text-border text-sm w-10/12'>{content}</p>
            </div>
        </div>
    )
}
