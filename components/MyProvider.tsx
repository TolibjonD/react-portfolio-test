import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <div>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}
