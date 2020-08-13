import React from 'react'
import { Container } from './styles'
import logo from '../assist/logokipper.png'

const Nav = () => {
  return (
    <Container>
      <img src={logo} alt={'Logo da empresa Kipper Movies'} />
    </Container>
  )
}

export default Nav
