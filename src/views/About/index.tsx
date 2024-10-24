import Heading from '@/components/Heading'
import FramedImage from '@/components/image'
import TimelineComponent from '@/components/timeline'
import { events } from '@/constants/data/events'
import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutView = () => {
    return (
        <Box sx={{ p: { xs: '10px', md: '100px' }, mt: "80px" }}>
            <Heading label='About' />
            <Box sx={{ display: 'flex', gap: '50px', flexDirection: { xs: 'column', md: 'row' }, }}>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Typography variant='body1' sx={{ color: "#474747", textAlign: 'justify', my: '50px' }}>
                        Proficient Backend Developer with expertise in <b>Python</b>, <b>JavaScript</b>, <b>TypeScript</b>, and mastery of essential tools and frameworks. Adept in designing scalable, secure, and high-performance applications. Skilled in <b>API development</b>, <b>database management</b>, <b>authentication</b>, <b>JWT handling</b>, and <b>containerization (Docker)</b>. Strong experience in <b>Express.js</b>, <b>Node.js</b>, and <b>Next.js</b> for server-side development, with an emphasis on <b>RESTful services</b> and <b>microservices architecture</b>. Capable of implementing complex data structures, error handling, and optimization strategies. Passionate about delivering clean, efficient code for dynamic and interactive web applications.
                    </Typography>
                    <FramedImage src='/images/me-2.png' alt='me-2' />
                </Box>
                <TimelineComponent events={events} />
            </Box>
        </Box>
    )
}

export default AboutView