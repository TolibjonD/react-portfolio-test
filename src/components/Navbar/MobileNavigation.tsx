import { Box, IconButton } from '@mui/material';
import React from 'react';
import { Blogger, Briefcase, Home, MessageText1 } from 'iconsax-react';

const MobileNavigation = () => {

    // Function to scroll to the specific section by its ID
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#f98f44',
                boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '6px 0',
                zIndex: 1000,
                borderRadius: '20px 20px 0px 0px'
            }}
        >
            {/* Home Button */}
            <IconButton aria-label="Home" onClick={() => scrollToSection('home')}>
                <Home size="25" color="#ffffff" />
            </IconButton>

            {/* Blog Button */}
            <IconButton aria-label="Blog" onClick={() => scrollToSection('about-se')}>
                <Briefcase size="25" color="#ffffff" />
            </IconButton>

            {/* Work Button */}
            <IconButton aria-label="Work" onClick={() => scrollToSection('blog-se')}>
                <Blogger size="25" color="#ffffff" />
            </IconButton>

            {/* Contact Button */}
            <IconButton aria-label="Contact" onClick={() => scrollToSection('contact-se')}>
                <MessageText1 size="25" color="#ffffff" />
            </IconButton>
        </Box>
    );
};

export default MobileNavigation;
