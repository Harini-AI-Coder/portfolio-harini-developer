import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, py: 4, backgroundColor: '#08171b', color: '#9fbcc8' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 16px' }}>
        <Typography variant="body2">© {new Date().getFullYear()} Harini. All rights reserved.</Typography>
      </div>
    </Box>
  )
}
