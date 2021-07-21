import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import useProtectedPage from '../../../hooks/useProtectedPage'
import deleteTrip from '../../../requests/deleteTrip'
import useRequestDataAuth from '../../../hooks/useRequestDataAuth'
import Footer from '../../../components/footer/Footer'
import { logout } from '../../../utils/logout'

import ButtonPattern from '../../../components/ButtonPattern'
import Loading from '../../../components/Loading'
import { IconButton } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { Main, ButtonGroup, ButtonGroupRight, TripsList, Trip } from './Styled'
import { goToCreateTrip, goToHome, goToTripDatailsPage } from '../../../routes/coordinator'


function AdminHomePage() {
  useProtectedPage()

  const history = useHistory()
  const tripsList = useRequestDataAuth('/trips', {})

  const tripsOrder = tripsList.trips && tripsList.trips.map((trip) => {
    return (
      <Trip key={trip.id} >
        <p onClick={() => goToTripDatailsPage(history, trip.id)}>{trip.name}</p>

        <IconButton
          onClick={() => deleteTrip(trip.id)}
          icon={<DeleteIcon />} />
      </Trip>
    )
  })


  return (
    <>
      <Header
        colorLogo={'red'}
      />

      <Main>
        <ButtonGroup>
          <ButtonPattern
            onClick={() => goToCreateTrip(history)}
            name={'Criar viagem'}
          />

          <ButtonGroupRight>
            <ButtonPattern
              onClick={() => goToHome(history)}
              name={'Voltar'}
              variant={'ghost'}
              color={'black'}
            />
            <ButtonPattern
              onClick={() => logout(history)}
              name={'Sair'}
            />
          </ButtonGroupRight>
        </ButtonGroup>

        <TripsList>
          {tripsOrder ? tripsOrder : <Loading />}
        </TripsList>
      </Main>

      <Footer />
    </>

  )
}

export default AdminHomePage