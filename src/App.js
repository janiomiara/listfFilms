import React from 'react'
import GloblaStyles from './styles/global'
import Nav from './nav'
import Filmes from './filmes'
import Modal from './modal'
import { ModalProvider } from './modal/Context'

function App() {
  return (
    <ModalProvider>
      <GloblaStyles />
      <Nav />
      <Filmes />
      <Modal />
    </ModalProvider>
  )
}

export default App
