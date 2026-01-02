
import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Contact(){
  return (
    <Container maxWidth="lg" sx={{pt:6,mb:6}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{mb:2}}>Let's Work Together</Typography>
          <Typography sx={{color:'#bcdfe6'}}>Feel free to get in touch — I am available for freelance projects.</Typography>
          <div style={{marginTop:18}}>
            <div>Email: harini.dev66@gmail.com</div>
            <div>Phone: +91 9489573326</div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <form>
            <TextField fullWidth label="Name" sx={{mb:2}} />
            <TextField fullWidth label="Email" sx={{mb:2}} />
            <TextField fullWidth label="Message" multiline rows={4} sx={{mb:2}} />
            <Button variant="contained" color="primary">Submit</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}
