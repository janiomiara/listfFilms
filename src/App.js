import React from 'react'
import GloblaStyles from './styles/global'
import Nav from './nav'
import Modal from './modal'
import Filmes from './filmes'
import { ModalProvider } from './modal/context'

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
