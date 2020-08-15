import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.55);
`

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  z-index: 5000;
`

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  color: aliceblue;
  width: 500px;
  height: auto;
  font-size: 14px;
  background-color: #000000;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-bottom {
    0% {
      transform: translateY(-500px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 30px;
  top: 0;
  border-radius: 5px 5px 0px 0px;
`

export const TituloBody = styled.h1`
  margin-bottom: 20px;
`

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  justify-items: center;
  background-color: #ab1616;
  width: 25px;
  height: 25px;
  top: -5px;
  right: -4px;
  color: white;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  transition: 125ms linear;
  :hover {
    transform: scale(1.07);
  }
`
