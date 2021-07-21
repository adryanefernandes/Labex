import styled from 'styled-components'
import background from '../../../assets/backgroundHome.jpg'

export const Container = styled.div `
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 76vh;
`
export const Tittle = styled.h1 `
  font-size: 4rem;
  font-weight: 900;
  color: rgb(0, 0, 0);
  text-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
  text-align: center;


  @media screen and (max-device-width: 420px){
    font-size: 2.5rem;
  }

  @media screen and (min-device-width: 421px) and (max-device-width: 960px){
    font-size: 3rem;
  }
`
export const Subtittle = styled.h3 `
  font-size: 2.3rem;
  margin-top: -1.8rem;
  color: rgb(0, 0, 0);
  font-weight: 500;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, .5);

  @media screen and (max-device-width: 720px){
    display: none;
  }

  @media screen and (min-device-width: 721px) and (max-device-width: 960px){
    margin-top: -1rem;
    font-size: 1.7rem;
  }
`