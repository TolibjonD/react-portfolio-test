import { Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const inter = Inter({
    weight: ['100', '300', '500', '600', '700', '800']
})

export const Navbar = () => {
    return (
        <div className={`${inter.className} flex justify-between px-20 py-5 fixed bg-transparent backdrop-blur right-0 top-0 left-0 z-50`}>
            <h1 className='text-2xl font-bold'>Saidy<span className='text-4xl text-rose-400'>.</span></h1>
            <button
                className='cursor-pointer'
            >
                <Image
                    src={"/icons/burger.svg"}
                    alt='dribble logo, dribble icon'
                    width={22}
                    height={18}
                />
            </button>
        </div>
    )
}
