import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #000000;
  flex-wrap: wrap;
  height: 90vh;
`

export const ContainerImagem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #000000;
  flex-wrap: wrap;
  padding: 20px;
  height: 100%;
  overflow: auto;
`
export const ContainerMensagem = styled.div`
  width: 100%;
  height: 35px;
  background-color: #000000;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: flex-end;
  align-content: center;
  background-color: #175f69;
  background-repeat: no-repeat, repeat;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  width: 280px;
  height: 400px;
  border: 1px solid;
  transition: 300ms;

  :hover {
    opacity: 1;
    box-shadow: 0px 0px 17px 7px #34a280;
    transform: scale(1.03);
  }
`

export const Descricao = styled.div`
  flex-direction: column;
  font-size: 13px;
  color: white;
  width: 100%;
  height: 90px;
  background-color: #000000;
  opacity: 0.9;
  flex-wrap: nowrap;
  padding: 10px;

  animation: scale-up-ver-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes scale-up-ver-bottom {
    0% {
      transform: scaleY(0.4);
      transform-origin: 0% 100%;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 0% 100%;
    }
  }
`
export const Mensagem = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  font-size: 10px;
  color: white;
  width: 100%;
  height: 40px;
  background-color: black;

  animation: tracking-in-contract 1s cubic-bezier(0.215, 0.61, 0.355, 1) 2 both;

  @keyframes tracking-in-contract {
    0% {
      letter-spacing: 0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }
`
