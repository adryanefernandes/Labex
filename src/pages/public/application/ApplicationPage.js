import React from 'react'

import Footer from '../../../components/footer/Footer'
import Header from '../../../components/Header/Header'
import ApplicationForm from './ApplicationForm'

import background from '../../../assets/backgroundManInMoon.jpg'

import { ContainerForm, Container, Image } from './Styled'


function ApplicationPage() {

  return (
    <Container>
      <ContainerForm>
        <Header
          colorLogo={'red'}
        />
        <ApplicationForm />
        <Footer />
      </ContainerForm>

      <Image img={background}>
        <div>
          <h3 id="sitation">"Um pequeno passo para o homem, um grande salto para a humanidade."</h3>
          <p id="credit">-Neil Armstrong</p>
        </div>
      </Image>
    </Container>
  )
}

export default ApplicationPage