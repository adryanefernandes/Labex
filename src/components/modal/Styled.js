import styled from 'styled-components'

export const Container = styled.div `
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content:center;
  z-index: 999;
`
export const ModalContainer = styled.div `
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  width: 21rem;
  margin: 1rem;
  box-shadow: 2px 2px 5px gray;
  padding: 2rem;
  border-radius: 10px;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;

  #closeIcon {
    text-align: right;
    
    width: 17rem;
    button {
      cursor: pointer;
      outline: none;
      box-shadow: 0 0 0 0;
      border: 0 none;
    }
  }

  p{
    margin-top: .5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
  }
`

export const ButtonGroup = styled.div `
  display: flex;
  justify-content: space-around;

  button{
    width: 48%;
    font-weight: 600;
    border-radius: 10px;
  }

  #delete{
    background: #ff0000;
    padding: .4rem 0;
    color: white;

    &:hover{
      background: #b80000;
    }
  }

  #cancel{
    &:hover{
      background: #c4c4c4;
    }
  }
`