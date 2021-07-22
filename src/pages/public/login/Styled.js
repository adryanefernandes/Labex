import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
`

export const ContainerForm = styled.div`
  width: 55%;
  box-shadow: 1px 1px 10px black;
  background: white;

  @media screen and (max-width: 600px){
    width: 100vw;
  }
  

  #formCenter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 90vh;
  }
`

export const Form = styled.form` 
  padding: 2rem;
  margin: 0 1rem;

  @media screen and (max-width: 600px){
    padding: 2rem 2rem;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`

export const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  z-index: -1;

  width: 100%;
  height: 100vh;
  
  @media screen and (max-width: 600px){
    display: none;
  }

  @media screen and (min-width: 601px) and (max-width: 900px){
    width: 50%;
  }

  div{
    padding: 2rem 2.5rem;
    width: 80%;

    p{
      color: white;
      font-size: 3rem;
      font-weight: 900;

      @media screen and (max-width: 820px){
        display: none;
      }

      @media screen and (min-width: 601px)  and (max-width: 1100px){
        font-size: 1.8rem;
      }
    }

    span{
      font-size: 4rem;

      @media screen and (min-width: 600px)  and (max-width: 1100px){
        font-size: 2.2rem;
      }
    }
  } 
`