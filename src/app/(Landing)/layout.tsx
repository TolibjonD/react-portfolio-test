"use client"
import GoToTop from '@/components/goToTop';
import Navbar from '@/components/Navbar';
import MobileNavigation from '@/components/Navbar/MobileNavigation';
import React from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import Link from 'next/link';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Instagram, User, Youtube } from 'iconsax-react';
import { SocialMedia } from '@/constants/links';
import TelegramIcon from '@mui/icons-material/Telegram';

const DefaultLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile && (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: { xs: "10px 25px", md: "30px 100px" }
                }}>
                    <Link href={"#"}>
                        <Typography variant='h6' sx={{ fontWeight: "600", m: '10px' }}>
                            <User size="18" color="#FF8A65" variant="Bulk" style={{ display: 'inline' }} />
                            <span style={{ color: "#FF8A65" }}>T</span>olibjon</Typography>
                    </Link>
                    <Stack alignItems={"center"} direction={"row"} gap={"10px"}>
                        <Link href={SocialMedia.telegram} >
                            <IconButton >
                                <TelegramIcon sx={{ fontSize: '25px', color: "#FF8A65" }} />
                            </IconButton>
                        </Link>
                        <Link href={SocialMedia.instagram} >
                            <IconButton>
                                <Instagram size={"20px"} color="#FF8A65" />
                            </IconButton>
                        </Link>
                        <Link href={SocialMedia.youtube} >
                            <IconButton>
                                <Youtube size={"22px"} color="#FF8A65" />
                            </IconButton>
                        </Link>
                    </Stack>
                </Box >
            )}
            {isMobile ? <MobileNavigation /> : <Navbar />}
            {children}
            <GoToTop />
        </>
    );
};

export default DefaultLayout;
