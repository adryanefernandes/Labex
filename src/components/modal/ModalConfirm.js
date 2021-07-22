import { Container, ModalContainer, ButtonGroup } from './Styled'
import { CloseIcon } from '@chakra-ui/icons'

export function ModalConfirm(props) {
  return <Container onClick={props.closeModal}>
    <ModalContainer bg='white' color='black'>

      <div id="closeIcon">
        <button onClick={props.closeModal}>
          <CloseIcon />
        </button>
      </div>

      <p>Deseja mesmo apagar a viagem?</p>

      <ButtonGroup>
        <button id='delete' onClick={props.delete}>Deletar</button>
        <button id='cancel' onClick={props.cancel}>Cancelar</button>
      </ButtonGroup>

    </ModalContainer>
  </Container>
}