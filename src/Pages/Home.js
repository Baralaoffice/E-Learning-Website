import { Container } from '@mui/material'
import React from 'react'
import About from '../components/About/About'
import Circle from '../components/banner/Circle'
import Content from '../components/banner/maincontent/Content'
import Carts from '../components/Cartcomponents/Carts'
import Courses from '../components/Courses/Courses'


function Home() {
  return (
    <Container maxWidth="xl">
      <Content />
      <Circle />
      <About/>
      <Carts/>
      <Courses/>
    </Container>
  )
}

export default Home