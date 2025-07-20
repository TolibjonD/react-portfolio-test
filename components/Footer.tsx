"use client"
import React, { useState } from 'react'
import { IconButton } from './IconButton';
import Image from 'next/image';
import { Instagram } from 'iconsax-react';
import { Button } from './Button';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    return (
        <footer className=''>
            <div className='px-4 sm:px-8 md:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0'>
                <h1 className='text-2xl sm:text-4xl md:text-[75px] md:w-[693px] font-semibold text-center md:text-left'>Let's Work Together -</h1>
                <div className='flex flex-col gap-4 w-full md:w-auto'>
                    <Button
                        className='rounded-lg border border-border w-full md:w-auto text-base sm:text-xl px-4 py-2'
                    >
                        <span className='flex items-center justify-center gap-2 w-full'>
                            <Image
                                src={"/icons/mail.png"}
                                alt='facebook logo, facebook icon'
                                width={24}
                                height={24}
                                className='sm:w-[30px] sm:h-[30px] w-6 h-6'
                            />
                            <span className='text-base sm:text-2xl text-my-text'>stolibjon123@gmail.com</span>
                        </span>
                    </Button>
                    <Button
                        className='rounded-lg bg-green-button border border-border w-full md:w-auto text-base sm:text-xl px-4 py-2'
                    >
                        <span className='flex items-center justify-center gap-2 w-full '>
                            <Image
                                src={"/icons/upwork.svg"}
                                alt='facebook logo, facebook icon'
                                width={24}
                                height={24}
                                className='sm:w-[30px] sm:h-[30px] w-6 h-6'
                            />
                            <span className='text-base sm:text-2xl text-my-text'>Hire me on Upwork</span>
                        </span>
                    </Button>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-5 border-t border-border gap-4 sm:gap-0'>
                <p className='text-border text-sm sm:text-base text-center sm:text-left'>© <span id="year">{currentYear}</span> All rights reserved.</p>
                <SocialLinks />
            </div>
        </footer>
    )
}
