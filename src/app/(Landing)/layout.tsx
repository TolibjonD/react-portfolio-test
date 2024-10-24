import GoToTop from '@/components/goToTop';
import Navbar from '@/components/Navbar';
import React from 'react'

const DefaultLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Navbar />
            {children}
            <GoToTop />
        </>
    )
}

export default DefaultLayout