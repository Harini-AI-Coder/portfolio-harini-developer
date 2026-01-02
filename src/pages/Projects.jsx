import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function Projects(){
  return (
    <Container maxWidth="lg" sx={{pt:6,mb:6}}>
      <Typography variant="h4" sx={{textAlign:'center',mb:4}}>Latest <span style={{color:'#00d1ff'}}>Project</span></Typography>
      <Grid container spacing={3}>
        {[1,2,3,4].map(n => (
          <Grid item xs={12} md={3} key={n}>
            <div className="project-card" style={{height:180,background:'#0d1f26',borderRadius:8}}></div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
