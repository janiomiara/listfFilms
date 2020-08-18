import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styles'
import { ModalContext } from './context'
import moment from 'moment'
import kipper from '../assist/capa_filme_kipper.png'

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
    popularity,
    vote_average,
    vote_count,
  } = filmes

  const formatData = moment(release_date).format('DD/MM/YYYY')

  const closeModal = (e) => {
    let result = e.includes('container')
    if (result) setShowModal(false)
  }

  return ReactDOM.createPortal(
    <>
      {modal && (
        <>
          <S.Overlay />
          <S.Container
            className={'container'}
            onClick={(e) => closeModal(e.target.className)}
          >
            <S.Wrapper>
              <S.Header>
                <S.Close onClick={() => setShowModal(false)}>x</S.Close>
              </S.Header>

              <S.WrapperImg>
                <img
                  src={poster_path ? `${urlImage}${poster_path}` : kipper}
                  alt={`imagen da capa do filme ${title}`}
                />
              </S.WrapperImg>

              <S.WrapperBody>
                <S.Informacoes>
                  <div className={'tituloPrincipal'}>{title}</div>
                  <div className={'subTitulo'}>Titulo</div>
                </S.Informacoes>

                <S.Informacoes>
                  <div className={'titulo'}>{original_title}</div>
                  <div className={'subTitulo'}>Titulo Original</div>
                </S.Informacoes>

                <S.Informacoes>
                  <div className={'titulo'}>{formatData}</div>
                  <div className={'subTitulo'}>Data Lançamento</div>
                </S.Informacoes>

                <S.Informacoes>
                  <div className={'titulo'}>{original_language}</div>
                  <div className={'subTitulo'}>Idioma Original</div>
                </S.Informacoes>

                <S.Informacoes>
                  <div className={'titulo'}>{popularity}</div>
                  <div className={'subTitulo'}>Popularidade</div>
                </S.Informacoes>

                <S.Informacoes>
                  <div className={'titulo'}>{vote_average}</div>
                  <div className={'subTitulo'}>Média de votos</div>
                </S.Informacoes>

                <S.Informacoes>
                  <div className={'titulo'}>{vote_count}</div>
                  <div className={'subTitulo'}>Votos</div>
                </S.Informacoes>

                <S.Informacoes>
                  <div className={'titulo'}>{adult ? 'Sim' : 'Não'}</div>
                  <div className={'subTitulo'}>Classificação Adultos</div>
                </S.Informacoes>
              </S.WrapperBody>
            </S.Wrapper>
          </S.Container>
        </>
      )}
    </>,
    document.querySelector('body')
  )
}

export default Modal
