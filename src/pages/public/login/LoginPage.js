import Footer from '../../../components/footer/Footer'
import { useUnprotectePage } from '../../../hooks/useUnprotectedPage'
import LoginForm from './LoginForm'
import Header from '../../../components/Header/Header'

import ImageBackground from '../../../assets/backgroundLogin.jpg'
import { ContainerForm, Container, Image } from './Styled'

function LoginPage() {
  useUnprotectePage()

  return (
    <Container>
      <ContainerForm>
        <div id="formCenter">
          <Header colorLogo={'red'} />
          <LoginForm />
        </div>


        <Footer />
      </ContainerForm>

      <Image img={ImageBackground}>
        <div>
          <p>Bem-vindo(a), <span>comandante!</span></p>
        </div>
      </Image>
    </Container >

  )
}

export default LoginPage