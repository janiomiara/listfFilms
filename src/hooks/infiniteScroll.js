import { useEffect, useRef, useState } from 'react'

export default function useInfiniteScroll() {
  const [page, setPage] = useState(1)
  const ref = useRef(null)

  const getListContainer = () => {
    return ref.current
  }

  useEffect(() => {
    getListContainer().addEventListener('scroll', handleScroll)
    return () => getListContainer().removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const list = getListContainer()
    const winScroll = list.scrollTop
    const height = list.scrollHeight - list.clientHeight
    const scrolled = winScroll - height
    if (scrolled === 0) {
      setPage((prevCount) => prevCount + 1)
    }
  }
  return {
    page,
    ref,
  }
}
