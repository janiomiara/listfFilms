import React, { useContext, useState } from 'react'
import { ModalContext } from '../modal/context'
import * as S from './styles'
import moment from 'moment'
import kipper from '../assist/capa_filme_kipper.png'

const urlImage = 'https://image.tmdb.org/t/p/w220_and_h330_face/'

const ContainerFilme = ({ filme }) => {
  const { handleModal } = useContext(ModalContext)
  const { poster_path, title, release_date } = filme
  const [state, setState] = useState(false)
  const formatData = moment(release_date).format('DD/MM/YYYY')

  const showDescr = () => {
    setState(true)
  }

  return (
    <>
      <S.Wrapper
        data-testid='evento'
        background={poster_path ? `${urlImage}${poster_path}` : kipper}
        onMouseOver={() => setState(true)}
        onMouseOut={() => setState(false)}
        onClick={() => handleModal(filme)}
      >
        {state && (
          <S.Descricao>
            <p data-testid='title'>{title}</p>
            <div data-testid='data'>{formatData}</div>
          </S.Descricao>
        )}
      </S.Wrapper>
    </>
  )
}

export default ContainerFilme
