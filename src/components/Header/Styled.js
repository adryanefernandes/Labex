import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: 1 / -1;

  @media screen and (max-width: 420px){
    flex-direction: column;
  }
`

export const ContainerButton = styled.div`
  position: fixed;
  right: 1rem;
  top: 2rem;

  @media screen and (max-width: 420px){
    right: .2rem;
    top: .5rem;
  }
`
