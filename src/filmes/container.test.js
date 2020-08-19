import React from 'react'
import { render } from '@testing-library/react'
import ContainerFilme from './containerFilme'
import { ModalContext } from '../modal/context'

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

it('Teste contianer status false', () => {
  const { getByTestId, queryByTestId } = render(
    <ModalContext.Provider
      value={{
        modal: false,
        setShowModal,
        filmes: false,
        handleModal,
      }}
    >
      <ContainerFilme filme={false} />
    </ModalContext.Provider>
  )
  expect(queryByTestId(/title/)).toBeNull()
  expect(queryByTestId(/data/)).toBeNull()
})

it('Teste contianer filmes recbendo dados', () => {
  const { getByTestId } = render(
    <ModalContext.Provider
      value={{
        modal,
        setShowModal,
        filmes,
        handleModal,
      }}
    >
      <ContainerFilme filme={filmes} />
    </ModalContext.Provider>
  )
  expect(getByTestId('title')).toHaveTextContent('Titulo do filme')
  expect(getByTestId('data')).toHaveTextContent('20/08/2020')
})
