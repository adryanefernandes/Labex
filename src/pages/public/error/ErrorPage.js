import { Icon } from "@chakra-ui/react"

import { useHistory } from 'react-router-dom'
import { IoIosRocket } from 'react-icons/io'
import ButtonPattern from "../../../components/ButtonPattern"
import { Message, Container } from './Styled'

function ErrorPage() {
  const history = useHistory()
  return <Container>
    <Icon as={IoIosRocket} h={100} w={100} />
    <Message>Ops! Essa página não existe.</Message>
    <ButtonPattern
      onClick={(() => history.push('/'))}
      margin={'1rem'}
      name={'Voltar para a página principal'}
    />
  </Container>
}

export default ErrorPage