import styled from 'styled-components'

export const Container = styled.footer `  
    text-align: center;
    width: 100%;
    padding:  1rem 0 .5rem 0 ;
    color: rgb(0, 0, 0);
    font-weight: bold;

    grid-column: 1 / -1;

    p{
      @media screen and (max-width: 420px){
        font-size: .8rem;
      }
    }
`