import { Container } from '@mui/material'
import React from 'react'
import About from '../components/About/About'
import Circle from '../components/banner/Circle'
import Content from '../components/banner/maincontent/Content'


function Home() {
  return (
    <Container maxWidth="xl">
      <Content />
      <Circle />
      <About/>
        
    </Container>
  )
}

export default Home