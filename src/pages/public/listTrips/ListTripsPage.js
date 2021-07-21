import React from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer'
import Loading from '../../../components/Loading'

import ButtonPattern from '../../../components/ButtonPattern'
import { Message, ButtonGroup, MessageAndButton, ContainerCards, Card, Tittle, Description, ContainerInfos, Infos, TittleInfos, Container, ContainerDateDuraction } from './Styled'
import { tripCreationDate } from '../../../utils/tripCreationDate'
import { goToApplication, goToHome } from '../../../routes/coordinator'

function ListTripsPage() {
  const history = useHistory()

  const tripsList = useRequestData('/trips', {})

  const orderlyTrips = tripsList.trips && tripsList.trips.map(
    (trip) => {

      const dateTrip = tripCreationDate(trip.date)
      return (
        <Card>
          <ContainerInfos>
            <Tittle>{trip.name}</Tittle>
            <ContainerDateDuraction>
              <Infos>
                <TittleInfos>Data:</TittleInfos>
                {dateTrip}
              </Infos>
              <Infos>
                <TittleInfos>Duração:</TittleInfos>
                {trip.durationInDays} dias
              </Infos>
              <Infos>
                <TittleInfos>Planeta:</TittleInfos>
                {trip.planet}
              </Infos>
            </ContainerDateDuraction>
          </ContainerInfos>

          <div>
            <Description>{trip.description}</Description>
          </div>

        </Card>
      )
    })
  return (
    <Container>
      <Header
        colorLogo={'red'}
      />
      <MessageAndButton>
        <Message>Bem-vindo(a), viajante!</Message>
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
      <Footer />
    </Container >
  )
}

export default ListTripsPage