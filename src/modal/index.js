import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styles'
import { ModalContext } from './context'
import moment from 'moment'

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

  const formatData = moment(release_date).format('DD/MM/YYYY')

  return ReactDOM.createPortal(
    <>
      {modal && (
        <>
          <S.Overlay />
          <S.Container>
            <S.Wrapper>
              <S.Header>
                <S.Close onClick={() => setShowModal(false)}>x</S.Close>
              </S.Header>

              <S.WrapperImg>
                <img
                  src={`${urlImage}${poster_path}`}
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

                {/*<S.Informacoes>*/}
                {/*  <div className={'titulo'}>{overview}</div>*/}
                {/*  <div className={'subTitulo'}>Visão Geral</div>*/}
                {/*</S.Informacoes>*/}

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
    document.querySelector('#root')
  )
}

export default Modal
