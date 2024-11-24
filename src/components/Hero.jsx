import { Box, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'url(/flights_nc_4.svg) center/cover',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Typography variant="h3">
        Flights
      </Typography>
    </Box>
  )
}

export default Hero