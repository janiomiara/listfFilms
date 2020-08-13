import { useEffect, useState } from 'react'

export default function useInfiniteScroll(callback) {
  const [isFetching, setIsFetching] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTPage] = useState(10000)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    if (totalPage >= page) callback()
  }, [isFetching, page, callback, totalPage])

  const handleScroll = () => {
    const { scrollTop, scrollHeight } = document.scrollingElement
    if (scrollTop + window.innerHeight >= scrollHeight) {
      setPage((prevCount) => prevCount + 1)
      return setIsFetching(true)
    }
  }
  return { page, isFetching, setIsFetching, setTPage, totalPage, setPage }
}
