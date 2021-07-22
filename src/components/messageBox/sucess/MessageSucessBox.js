import { Container } from './Styled'
import { CloseIcon } from '@chakra-ui/icons'

export function MessageSucessBox(props) {
  return <Container>
    <p>{props.message}</p>

    <div id="closeIcon">
      <button onClick={props.closeMessage}>
        <CloseIcon />
      </button>
    </div>
  </Container>;
}