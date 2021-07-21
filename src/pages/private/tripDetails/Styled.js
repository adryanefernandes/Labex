import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: .5fr 3fr .25fr;

  main{
    display: grid;
    grid-template-rows: 20rem 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem; 

    margin: 0 5rem;

    @media screen and (max-device-width: 780px){
      margin: 0 1rem;
    }

    @media screen and (max-device-width: 960px){
      display: flex;
      flex-direction: column;
    }
  }
`

const Card = styled.div`
  background: #F0EBE1;
  box-shadow: 1px 1px 5px gray;
  padding: 2rem 1rem;
  border-radius: 10px;
  text-align: center;
  overflow-y: auto;
`

export const CardTrip = styled(Card)`
  p{
    color: #DD6847;
    font-weight: 500;
    font-size: 2rem;
  }

  #description{
    font-weight: 300;
    font-size: 1.5rem;
    padding: .2rem;
    text-align: justify;

    overflow-y: auto;
  }
`

export const InfosGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;

  div{
    display: flex;
    flex-direction: column;

    span {
      color: #DD6847;
    }
  }
`

export const CardApproved = styled(Card)`
  h3{
    color: #DD6847;
    font-weight: 300;
    font-size: 1.5rem;
  }

  p{
    text-align: left; 
    padding: .5rem;
    border-bottom: 1px solid gray;
  }
`

export const CardCandidates = styled(Card)`
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: .25fr repeat(min(1), 2fr);

  overflow-y: auto;

  @media screen and (max-device-width: 780px){
    grid-template-columns: 1fr;
  }

  h3{
    grid-column: 1 / -1;

    color: #DD6847;
    font-weight: 300;
    font-size: 1.5rem;
  }
`

export const Candidate = styled.div` 
  border: 1px solid gray;
  margin: 1rem;
  border-radius: 10px;  
  padding: 1rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-y: auto;

  h1{
    font-size: 2rem;
    padding: .5rem;
    font-weight: 700;
    color: #DD6847;
  }

  div{
    text-align: left;

    .Tag{
      color: #DD6847;
    }

    .Contents{
      padding: 0 .5rem;
      font-size: 1.3rem;
      font-weight: 400;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem; 
 `