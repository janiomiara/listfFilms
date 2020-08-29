import React from 'react'
import { render } from '@testing-library/react'
import { ModalContext } from './context'
import Modal from './index'

const setShowModal = jest.fn()
const handleModal = jest.fn()
const modal = true
const filmes = {
  poster_path: 'http//',
  original_language: 'br',
  title: 'Titulo do filme',
  release_date: '2020/08/20',
  adult: false,
  original_title: 'Titulo Original',
  popularity: '15.5',
  vote_average: '10',
  vote_count: '10.8',
}

it('Test clouse modal', async () => {
  const { queryByText } = render(
    <ModalContext.Provider
      value={{
        modal: false,
        setShowModal,
        filmes,
        handleModal,
      }}
    >
      <Modal />
    </ModalContext.Provider>,
    {
      container: document.body,
    }
  )
  expect(queryByText('Titulo do filme')).not.toBeTruthy()
  expect(queryByText('10.8')).not.toBeTruthy()
})

it('Test modal props filme', async () => {
  const { queryByText } = render(
    <ModalContext.Provider
      value={{
        modal,
        setShowModal,
        filmes,
        handleModal,
      }}
    >
      <Modal />
    </ModalContext.Provider>,
    {
      container: document.body,
    }
  )
  expect(queryByText('Titulo do filme')).toBeTruthy()
  expect(queryByText('10.8')).toBeTruthy()
})
