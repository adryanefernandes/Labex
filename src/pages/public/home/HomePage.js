import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import ButtonPattern from '../../../components/ButtonPattern'
import Footer from '../../../components/footer/Footer'
import { Main, Container, Tittle } from './Styled'

function HomePage() {
  const history = useHistory()
  return (
    <Container>
      <Header
        colorLogo={'black'}
        isHome={true}
      />
      <Main>
        <Tittle>Um universo de possibilidades</Tittle>
        <ButtonPattern
          onClick={() => history.push('/trips/list')}
          name={'Viagens espaciais disponíveis'}
          bg={'brand.darkRed'}
          margin={'1rem'}
          colorHover={'rgb(255, 80, 100)'}
        /> 
      </Main>
      <Footer />
    </Container>
  )
}

export default HomePage