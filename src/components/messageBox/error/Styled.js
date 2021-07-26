import styled from 'styled-components'

export const Container = styled.div`
  background: #F7BEC0;
  color: #C85250;
  border-radius: 5px;
  display: flex;
  padding: 1rem .5rem ;
  margin: 1rem 0;
  border: 1px solid #C85250;

  #closeIcon {
    position: relative;
    right: -.2rem;
    top: -.7rem;

    @media screen and (min-width: 426px){
      right: -.8rem;
    }

    @media screen and (min-width: 600px){
      right: -.5rem;
      top: -.5rem;
    }
    
    button {
      cursor: pointer;
      outline: none;
      box-shadow: 0 0 0 0;
      border: 0 none;
      background: rgba(0,0,0,0);
    }
  }
  p{
    padding: 0 .8rem;
    width: 92%;
  }
`