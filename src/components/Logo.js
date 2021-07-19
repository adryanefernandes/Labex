import logoBlack from '../assets/logoBlack.png'
import logoRed from '../assets/logoRed.png'
import styled from 'styled-components'

const LogoImg = styled.img`
  width: 6rem;
`

function Logo(props) {
  let image
  if(props.color === 'black'){
    image = logoBlack
  } else if (props.color === 'red'){
    image = logoRed
  }

  return <LogoImg src={image} alt={'Logo labex'} />
}

export default Logo