import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

const skills = [
  {name:'HTML', value:90},
  {name:'CSS', value:80},
  {name:'JavaScript', value:75},
  {name:'React.js', value:70},
  {name:'Redux', value:65},
  {name:'TypeScript', value:50},
  {name:'Git', value:85},
  {name:'Responsive Design', value:80}
]

export default function Skills(){
  return (
    <Container maxWidth="lg" sx={{pt:6,mb:6}}>
      <Typography variant="h4" sx={{textAlign:'center',mb:4}}>My <span style={{color:'#00d1ff'}}>Skills</span></Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {skills.map(s => (
            <Box key={s.name} sx={{mb:3}}>
              <Typography sx={{mb:1}}>{s.name} <span style={{float:'right'}}>{s.value}%</span></Typography>
              <LinearProgress variant="determinate" value={s.value} sx={{height:10,borderRadius:5,background:'#052026','& .MuiLinearProgress-bar':{background:'#00d1ff'}}} />
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{mb:2}}>Professional Skills</Typography>
          <Grid container spacing={2}>
            {[
              {t:'Creativity',v:90},{t:'Communication',v:65},{t:'Problem Solving',v:75},{t:'Teamwork',v:85}
            ].map(p => (
              <Grid item xs={6} key={p.t}>
                <Box sx={{textAlign:'center',p:2,borderRadius:2,background:'#071f24'}}>
                  <Typography variant="h6" sx={{color:'#00d1ff'}}>{p.v}%</Typography>
                  <Typography variant="body2">{p.t}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
