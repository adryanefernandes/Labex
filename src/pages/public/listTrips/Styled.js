import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main{
    margin: 0 1rem;

    @media screen and (min-width: 1101px){
      margin: 0 5rem;
    }
  }
`
export const MessageAndButton = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 820px){
    flex-direction: column;
    text-align: center;
  }

  h2{
    color: #FEAE33;
    font-size: 2rem;
    font-weight: 800;

    @media screen and (max-width: 820px){
      font-size: 1.8rem;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 820px){
    padding-top: 1.5rem;
  }
`

export const ContainerCards = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 10rem);
  min-height: 68vh;

  gap: 1rem;
  margin-top: 1rem;
`

export const Card = styled.div`
  padding: 1rem 1.5rem;
  background: rgba(200,200,180, .5);
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .5);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 3rem;

  @media screen and (max-width: 820px){
    grid-template-rows: 1fr 4rem 5rem;
    grid-template-columns: 1fr;
  }
  
  h3{
    color: #DD6847;
    font-size: 2rem;
    font-weight: 700;

    display: flex;
    align-items: center;

    @media screen and (max-width: 820px){
      justify-content: center;
      text-align: center;
    }
  }

  h4{
    text-align: justify;
    color: #333;

    grid-row: 2 / 3;
    grid-column: 1 / -1;

    overflow-y: auto;

    @media screen and (max-width: 820px){
      grid-row: 3 / 4;
    }
  }
`

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  @media screen and (max-width: 820px){
    grid-row: 2 / 3;
  }

  div {
    text-align: center;
    margin:.5rem;

    p{
     color:#DD6847;
     font-size: .8rem; 
    }
  }
`