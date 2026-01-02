import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

export default function Services(){
  const items = [
    {title:'UI/UX Design', desc:'Designing intuitive interfaces'},
    {title:'Web Design', desc:'Responsive modern websites'},
    {title:'App Design', desc:'Mobile-first app experiences'}
  ]
  return (
    <Container maxWidth="lg" sx={{pt:6,mb:6}}>
      <Typography variant="h4" sx={{textAlign:'center',mb:4}}>My <span style={{color:'#00d1ff'}}>Services</span></Typography>
      <Grid container spacing={3}>
        {items.map(i => (
          <Grid item xs={12} md={4} key={i.title}>
            <Card sx={{background:'#071a20',boxShadow:'0 8px 30px rgba(0,200,255,0.06)'}}>
              <CardContent>
                <Typography variant="h6" sx={{mb:1,color:'#9df5ff'}}>{i.title}</Typography>
                <Typography sx={{mb:2,color:'#bcdfe6'}}>{i.desc}</Typography>
                <Button variant="contained" color="primary">learn more</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
