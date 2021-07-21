import React from 'react'

import Footer from '../../../components/footer/Footer'
import Header from '../../../components/Header/Header'
import ApplicationForm from './ApplicationForm'

import background from '../../../assets/backgroundManInMoon.jpg'

import { ContainerForm, Container, Image, Phrase, Credit, ContainerPhrase } from './Styled'


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
        <ContainerPhrase>
          <Phrase>"Um pequeno passo para o homem, um grande salto para a humanidade."</Phrase>
          <Credit>-Neil Armstrong</Credit>
        </ContainerPhrase>
      </Image>
    </Container>
  )
}

export default ApplicationPage