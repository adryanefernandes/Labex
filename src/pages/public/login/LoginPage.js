import Footer from '../../../components/footer/Footer'
import { useUnprotectePage } from '../../../hooks/useUnprotectedPage'
import LoginForm from './LoginForm'

import ImageBackground from '../../../assets/backgroundLogin.jpg'
import { ContainerForm, Container, Image, Phrase, ContainerPhrase, Phrase2 } from './Styled'

function LoginPage() {
  useUnprotectePage()

  return (
    <Container>
      <ContainerForm>
        <LoginForm />

        <Footer />
      </ContainerForm>

      <ContainerPhrase>
        <Phrase>Bem-vindo(a), <Phrase2>comandante!</Phrase2></Phrase>
      </ContainerPhrase>
      <Image src={ImageBackground} alt='imagem com astronauta e et se olhando' />
    </Container >

  )
}

export default LoginPage