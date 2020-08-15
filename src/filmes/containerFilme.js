import React, { useContext, useState } from 'react'
import { ModalContext } from '../modal/context'
import * as S from './styles'

const urlImage = 'https://image.tmdb.org/t/p/w220_and_h330_face/'

const ContainerFilme = ({ filme }) => {
  const { handleModal } = useContext(ModalContext)
  const { poster_path, original_language, title, release_date } = filme
  const [state, setState] = useState(false)
  return (
    <>
      <S.Wrapper
        background={`${urlImage}${poster_path}`}
        onMouseOver={() => setState(true)}
        onMouseOut={() => setState(false)}
        onClick={() => handleModal(filme)}
      >
        {state && (
          <S.Descricao>
            <div>Titulo: {title}</div>
            <div>Idioma: {original_language}</div>
            <div>Data: {release_date}</div>
          </S.Descricao>
        )}
      </S.Wrapper>
    </>
  )
}

export default ContainerFilme
