import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  height: 100vh;
`
export const ContainerForm = styled.div`
  display: grid;
  grid-template-rows: .25fr 2fr .25fr;
  height: 100%;
  width: 70%;

  @media screen and (max-device-width: 700px){
    width: 100vw;
  }
`
export const Form = styled.form`
  padding: 0 3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-device-width: 600px){
    padding: 2rem 2rem;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  #sendButton{
    background: #FEAE33;
    padding: .5rem 1rem;
    border-radius: 40px;
    font-weight: 600;
    color: white;

    &:hover{
      background: #ddAE33;    
    }

    &:active{
      transform: "scale(0.98)";
    }
  }
`

export const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: 50% 0;

  display: flex;
  align-items: center;

  @media screen and (max-device-width: 700px){
    display: none;
  }

  p{
    color: white;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 1px 1px 5px black;
    padding: 1rem;

    @media screen and (min-device-width: 700px)  and (max-device-width: 1100px){
      font-size: 1.8rem;
    }
  }
`

