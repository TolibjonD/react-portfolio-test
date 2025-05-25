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
            <div className='px-20 py-5 flex items-center justify-between'>
                <h1 className='md:text-[75px] md:w-[693px] font-semibold'>Let's WorkTogether -</h1>
                <div className='flex flex-col gap-4'>
                    <Button
                        className='rounded-lg border border-border'
                    >
                        <span className='flex items-center justify-center gap-2 w-full'>
                            <Image
                                src={"/icons/mail.png"}
                                alt='facebook logo, facebook icon'
                                width={30}
                                height={30}
                            />
                            <span className='text-2xl text-my-text'>stolibjon123@gmail.com</span>
                        </span>
                    </Button>
                    <Button
                        className='rounded-lg bg-green-button border border-border'
                    >
                        <span className='flex items-center justify-center gap-2 w-full '>
                            <Image
                                src={"/icons/upwork.svg"}
                                alt='facebook logo, facebook icon'
                                width={30}
                                height={30}
                            />
                            <span className='text-2xl text-my-text'>Hire me on Upwork</span>
                        </span>
                    </Button>
                </div>
            </div>
            <div className='flex items-center justify-between px-20 py-5 border-t border-border'>
                <p className='text-border'>© <span id="year">{currentYear}</span> All rights reserved.</p>
                <SocialLinks />
            </div>
        </footer>
    )
}
