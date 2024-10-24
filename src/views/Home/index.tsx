import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import "./styles.css"
import FramedImage from '@/components/image'

const Home = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column-reverse', md: 'row' }, p: { xs: '30px', md: '100px' } }}>
                <Box sx={{ width: { xs: "100%", md: "600px" }, mt: { xs: '60px' } }}>
                    <Typography variant='h6' >Hello, I`m Tolibjon.</Typography>
                    <Typography variant='h1' sx={{ fontWeight: { xs: "600", md: 'bold' }, fontSize: { xs: "50px", md: '100px' } }}>Full-Stack Developer</Typography>
                    <Typography variant='h6' >based in Uzbekistan.</Typography>
                    <span className='strokedButton'>
                        <Button sx={{ backgroundColor: "#ff89659c", color: '#474306', mt: '30px', borderRadius: "6px", width: { xs: '150px', md: "200px" }, height: { xs: '40px', md: '61px' } }} >Resume</Button>
                    </span>
                </Box>
                <Box>
                    <FramedImage src={"/images/me.jpg"} alt='Me' />
                </Box>
            </Box >
        </>
    )
}

export default Home