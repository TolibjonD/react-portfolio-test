import { Stack, Typography } from '@mui/material'
import { Receive } from 'iconsax-react'
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import React from 'react'

const Heading = ({ label }: { label: string }) => {
    return (
        <Stack direction={'row'} alignItems={"center"}>
            <Receive size="32" color="#FF8A65" variant="Bulk" />
            <Typography variant='h2' sx={{ fontWeight: { xs: '500', md: 'bold' }, fontSize: { xs: "40px", md: '60px' }, color: '#FF8A65' }}>
                {label} <FiberSmartRecordIcon sx={{ color: '#ff8965b4' }} />
            </Typography>
        </Stack>
    )
}

export default Heading;