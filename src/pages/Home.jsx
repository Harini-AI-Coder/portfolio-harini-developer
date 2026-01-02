import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ pt: 6 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, height: 60, fontSize: '3.5rem' }}>Harini M</Typography>
          <Typography variant="h6" sx={{ color: '#58f0ff', mb: 2 }}>Frontend Developer</Typography>
          <Typography sx={{ mb: 3, color: '#cfeff5' }}>I build modern web applications with a focus on performance and great UX.</Typography>
          <Button variant="contained" color="primary" sx={{textTransform:'none'}}>Download CV</Button>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <div className="neon-avatar">
            <Avatar alt="Harini" src="/src/assets/avatar.jpg" sx={{ width: 220, height: 220 }} />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
