import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const shortText = `
Hi, I’m Harini, a passionate Frontend Developer specializing in building dynamic
and responsive web applications using React.js. I love transforming ideas into
interactive, user-friendly interfaces that deliver seamless experiences....
`;

  const fullText = `
With a strong foundation in JavaScript (ES6+), HTML5, and CSS3, I focus on writing
clean, maintainable code and implementing modern UI practices. My expertise
includes React Hooks, Context API, and state management tools like Redux,
ensuring scalable and efficient applications.

I’m always eager to learn new technologies and improve performance, accessibility,
and design aesthetics. When I’m not coding, I enjoy exploring UI/UX trends and
contributing to open-source projects.

Let's collaborate and bring your digital vision to life!
`;

  return (
    <Container maxWidth="lg" sx={{ pt: 6, mb: 6 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <div className="neon-avatar" style={{ textAlign: 'center' }}>
            <img src="/src/assets/avatar.jpg" alt="me" style={{ width: 220, height: 220, borderRadius: '50%' }} />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ mb: 1 }}>About <span style={{ color: '#00d1ff' }}>Me</span></Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>Frontend Developer!</Typography>
          <Typography sx={{ color: '#bcdfe6' }}>{shortText}
            {showMore && fullText}</Typography>
          <div style={{ marginTop: 18 }}>
            <Button variant="outlined" color="primary" sx={{textTransform:'none'}} onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "More About Me"}</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
