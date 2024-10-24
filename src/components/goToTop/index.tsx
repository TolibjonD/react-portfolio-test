"use client"

import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowCircleUp } from 'iconsax-react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '60px',
                right: '10px',
                display: isVisible ? 'block' : 'none',
                transition: 'display 0.3s',
                zIndex: 1000,
            }}
        >
            <IconButton
                onClick={scrollToTop}
                sx={{
                    backgroundColor: '#f5ae93e3',
                    '&:hover': {
                        backgroundColor: '#ff6f435e',
                    },
                }}
            >
                <ArrowCircleUp variant="Broken" color='#ff5500' size={"20"} />
            </IconButton>
        </Box>
    );
};

export default GoToTop;
