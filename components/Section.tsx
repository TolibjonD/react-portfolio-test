import React from 'react'

export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen'>
            {children}
        </div>
    )
}
