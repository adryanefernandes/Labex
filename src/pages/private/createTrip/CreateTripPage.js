import React from 'react'
import useProtectedPage from '../../../hooks/useProtectedPage'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/footer/Footer'
import background from '../../../assets/backgroundCreateTrip.jpg'
import {  Container, Image, ContainerForm } from './Styled'
import CreateTripForm from './CreateTripForm'

function CreateTripPage() {
  useProtectedPage()

  return (
    <Container>

      <ContainerForm>
        <Header colorLogo={'red'} />

        <CreateTripForm />
        
        <Footer />
      </ContainerForm>

      <Image
        img={background}
      >
        <p>Qual o próximo destino, comandante?</p>
      </Image>

    </Container>
  )
}

export default CreateTripPage