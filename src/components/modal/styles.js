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
  z-index: 5000;
`

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  font-size: 14px;
  background-color: #000000;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  overflow: auto;
  overflow-x: hidden;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`

export const WrapperImg = styled.image`
  img {
    width: 330px;
    height: auto;
  }
`

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  font-size: 10px;
  color: #c4c4c4;
  width: auto;
`

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #434343;

  .tituloPrincipal {
    font-weight: bold;
    margin-top: 10px;
    color: white;
    font-size: 20px;
  }

  .titulo {
    font-weight: bold;
    margin-top: 10px;
    color: white;
    font-size: 14px;
  }

  .subTitulo {
    font-size: 10px;
    margin-bottom: 5px;
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

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  justify-items: center;
  background-color: #ab1616;
  width: 25px;
  height: 25px;
  top: 2px;
  right: 20px;
  color: white;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.1);
  transition: 125ms linear;
  :hover {
    transform: scale(1.07);
  }
`
