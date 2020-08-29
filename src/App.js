import React from 'react'
import GloblaStyles from './styles/global'
import Nav from './components/nav'
import Modal from './components/modal'
import Filmes from './components/movies'
import { ModalProvider } from './components/modal/context'

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
