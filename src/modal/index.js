import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styles'
import { ModalContext } from './context'
import Moment from 'moment'

const urlImage = 'https://image.tmdb.org/t/p/w220_and_h330_face/'

const Modal = () => {
  const { modal, setShowModal, filmes } = useContext(ModalContext)

  const {
    poster_path,
    original_language,
    title,
    release_date,
    adult,
    original_title,
    overview,
    popularity,
    vote_average,
    vote_count,
  } = filmes
  const momentFormatado = Moment.format(release_date, 'DD/MM/Y')

  return ReactDOM.createPortal(
    <>
      {modal && (
        <>
          <S.Overlay />
          <S.Container>
            <S.Wrapper>
              <S.Header>
                <h3>{title}</h3>
                <S.Close onClick={() => setShowModal(false)}>x</S.Close>
              </S.Header>
              <img src={`${urlImage}${poster_path}`} />
              <div>{original_language}</div>
              <div>{original_title}</div>
              <div>{momentFormatado}</div>
              <div>{adult}</div>

              <div>{overview}</div>
              <div>{popularity}</div>
              <div>{vote_average}</div>
              <div>{vote_count}</div>
            </S.Wrapper>
          </S.Container>
        </>
      )}
    </>,
    document.querySelector('#root')
  )
}

export default Modal
