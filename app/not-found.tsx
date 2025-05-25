import { Button } from '@/components/Button'
import { Home } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

export default function NotFound() {
    return (
        <div className='flex items-center justify-center max-h-[80vh]
        h-[60vh] flex-col'>
            <div className='relative w-full md:w-7/12 h-8/12'>
                <Image
                    src={"/images/mock.svg"}
                    alt='svg'
                    fill
                />
            </div>
            <div className='text-center'>
                <h1 className='font-semibold text-xl text-center text-my-text'>The requested page is not found.</h1>
                <Button
                    className='mt-5 rounded-lg border border-border'
                >
                    <span className='flex items-center justify-center gap-2'>
                        <span>Home</span>
                        <Home
                            color='currentColor'
                            size={18}
                        />
                    </span>
                </Button>
            </div>
        </div>
    )
}
