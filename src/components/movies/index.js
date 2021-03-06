import React, { useEffect, useState } from 'react'
import { getFilme } from './api'
import ContainerMovie from './containerMovie'
import useInfiniteScroll from '../../hooks/infiniteScroll'
import * as S from './styles'

const Filmes = () => {
  const [state, setState] = useState([])
  const [error, setError] = useState(false)
  const [msg, setMsg] = useState(false)
  const [loading, setLoading] = useState(false)
  const { page, ref } = useInfiniteScroll()

  async function hendleApi() {
    setError(false)
    setLoading(true)
    try {
      const res = await getFilme(page)
      const { total_pages, results } = res.data
      setState([...state, ...results])
      if (page >= total_pages) setMsg(true)
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    !msg && hendleApi()
  }, [page])

  return (
    <S.Container>
      <S.ContainerImagem ref={ref} data-testid='filmes'>
        {state &&
          state.map((filme, i) => {
            return <ContainerMovie key={i} filme={filme} />
          })}
      </S.ContainerImagem>
      <S.ContainerMensagem>
        {error && (
          <S.Mensagem data-testid='error'>TENTE MAIS TARDE!</S.Mensagem>
        )}
        {msg && <S.Mensagem data-testid='msg'>FIM DA LISTA</S.Mensagem>}
        {loading && <S.Mensagem data-testid='loading'>LOADING...</S.Mensagem>}
      </S.ContainerMensagem>
    </S.Container>
  )
}

export default Filmes
