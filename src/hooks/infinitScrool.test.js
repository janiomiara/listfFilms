import { renderHook, act } from '@testing-library/react-hooks'
import useInfiniteScroll from './infiniteScroll'

test('Iniciando hooks InfinitScrooll', () => {
  const { result } = renderHook(() => useInfiniteScroll())
  const { page, isFetching, totalPage } = result.current
  expect(page).toBe(1)
  expect(isFetching).toBe(false)
  expect(totalPage).toBe(10000)
})

test('Iniciando hook InfinitScroll setando varias tipo page e fetching', () => {
  const { result } = renderHook(() => useInfiniteScroll(() => {}))

  act(() => {
    const { setIsFetching, setTPage, setPage } = result.current
    setIsFetching(true)
    setTPage(15)
    setPage(2)
  })
  const { page, isFetching, totalPage } = result.current
  expect(page).toBe(2)
  expect(isFetching).toBe(true)
  expect(totalPage).toBe(15)
})
