import { NavItems } from '@/constants/navItems'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import TelegramIcon from '@mui/icons-material/Telegram';
import { SocialMedia } from '@/constants/links';
import { Instagram, Youtube } from 'iconsax-react';

const Navbar = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: { xs: "10px 25px", md: "30px 100px" }
        }}>
            <Link href={"#"}>
                <Typography variant='h6' sx={{ fontWeight: "600" }}><span style={{ color: "" }}>T</span>olibjon</Typography>
            </Link>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
            }}>
                {NavItems.map((item) => (
                    <Link
                        className='hover:text-gray-600'
                        href={item.url}
                        key={item.id}
                    >
                        {item.label}
                    </Link>
                ))}
            </Box>
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

    )
}

export default Navbar;