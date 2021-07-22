import { Container, ModalContainer } from './Styled'
import { CloseIcon } from '@chakra-ui/icons'

export function ModalMessage(props) {
  return <Container onClick={props.closeModal}>
    <ModalContainer bg={'#B1D8B7'} color="#2F5233">

      <div id="closeIcon">
        <button onClick={props.closeModal}>
          <CloseIcon />
        </button>
      </div>

      <p>Viagem deletada</p>
    </ModalContainer>
  </Container>
}