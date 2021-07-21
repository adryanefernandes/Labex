import styled from 'styled-components'

export const Main = styled.div`
  padding: 1rem;
  min-height: 80vh;

  @media screen and (min-device-width: 1100px){
    margin: 0 5rem;
  }
`
const EveryButtonGroup = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonGroup = styled(EveryButtonGroup)`
  padding: 1rem 0;
`
export const ButtonGroupRight = styled(EveryButtonGroup)`
`

export const TripsList = styled.section `
  display: grid;
  grid-template-rows: repeat(min(1), 1fr);

  gap: 1rem;
`

export const Trip = styled.div`
  background: #F0EBE1;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 4px gray;

  p{
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;  
  }
`
