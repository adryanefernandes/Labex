import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`
export const ContainerForm = styled.section`
  width: 80%;

  @media screen and (max-device-width: 600px){
    width: 100vw;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  height: 82%;

  justify-content: center;

  @media screen and (max-device-width: 600px){
    padding: 2rem 2rem;
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;

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

export const Image = styled.section`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-device-width: 600px){
    display: none;
  }

  @media screen and (min-device-width: 601px) and (max-device-width: 900px){
    width: 60%;
  }

  div{
    color: white;
    font-weight: 800;
    width: 62%;
    text-shadow: 1px 1px 5px black;

    h3{
      font-size: 2.5rem;
      text-align: center;

      @media screen and (min-device-width: 600px)  and (max-device-width: 1100px){
        font-size: 1.8rem;
      }
    }

    p{
      text-align: right;
      font-size: 1.5rem;
      text-shadow: 1px 1px 15px black;
    }
  }
`