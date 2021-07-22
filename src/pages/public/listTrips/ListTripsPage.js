import React from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/footer/Footer'
import Loading from '../../../components/Loading'

import ButtonPattern from '../../../components/ButtonPattern'
import { ButtonGroup, MessageAndButton, ContainerCards, Card, CardBody, Container } from './Styled'
import { tripCreationDate } from '../../../utils/tripCreationDate'
import { goToApplication, goToHome } from '../../../routes/coordinator'

function ListTripsPage() {
  const history = useHistory()

  const tripsList = useRequestData('/trips', {})

  const orderlyTrips = tripsList.trips && tripsList.trips.map(
    (trip) => {

      const dateTrip = tripCreationDate(trip.date)

      return (
        <Card key ={trip.id}>
            <h3>{trip.name}</h3>
            <h4>{trip.description}</h4>

          <CardBody>
              <div>
                <p>Data:</p>
                {dateTrip}
              </div>
              <div>
                <p>Duração:</p>
                {trip.durationInDays} dias
              </div>
              <div>
                <p>Planeta:</p>
                {trip.planet}
              </div>
          </CardBody>
        </Card>
      )
    })
  return (
    <Container>
      <Header
        colorLogo={'red'}
      />

      <main>
        <MessageAndButton>
          <h2>Bem-vindo(a), viajante!</h2>
          <ButtonGroup>
            <ButtonPattern
              onClick={() => goToHome(history)}
              name={'Voltar'}
              color={'black'}
              variant={'ghost'}
            />
            <ButtonPattern
              onClick={() => goToApplication(history)}
              name={'Inscrever-se'}
            />
          </ButtonGroup>
        </MessageAndButton>
        
        <ContainerCards>
          {orderlyTrips ? orderlyTrips : <Loading />}
        </ContainerCards>
      </main>

      <Footer />
    </Container >
  )
}

export default ListTripsPage