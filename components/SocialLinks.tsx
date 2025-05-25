"use client"
import React from 'react'
import { IconButton } from './IconButton'
import Image from 'next/image'
import { Instagram } from 'iconsax-react'
import { useRouter } from 'next/navigation'

type socilaLinkType = {
    icon: React.ReactNode;
    link: string
}

const socialLinks: socilaLinkType[] = [
    {
        icon: <span className='font-extrabold text-sm'>in</span>,
        link: 'https://www.linkedin.com/in/tolibjon/'
    },
    {
        icon: <Image
            src={"/icons/dribble.png"}
            alt='dribble logo, dribble icon'
            width={16}
            height={16}
        />,
        link: 'https://dribbble.com/saidkodirov'
    },
    {
        icon: <Image
            src={"/icons/facebook.png"}
            alt='facebook logo, facebook icon'
            width={10}
            height={10}
        />,
        link: 'https://www.facebook.com/tolibjon.saidqodirov.96/'
    },
    {
        icon: <Instagram
            color='currentColor'
            className='text-border'
            size={18}
        />,
        link: 'https://www.instagram.com/saidkodirof/'
    },
    {
        icon: <Image
            src={"/icons/Threads.png"}
            alt='Threads logo, Threads icon'
            width={14}
            height={14}
        />,
        link: 'https://www.instagram.com/saidkodirof//'
    },
]

export const SocialLinks = () => {
    const router = useRouter();

    const handleClick = (url: string) => router.replace(url);

    return (
        <div className='flex items-center gap-5'>
            {socialLinks.map((link, idx) => (
                <IconButton
                    key={idx}
                    onClick={() => handleClick(link.link)}
                >
                    {link.icon}
                </IconButton>
            ))}
        </div>
    )
}
