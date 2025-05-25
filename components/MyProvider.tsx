import React from 'react'
import { Footer } from './Footer'

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <div>{children}</div>
            <Footer />
        </div>
    )
}
