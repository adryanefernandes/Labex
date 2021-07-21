import React from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../../hooks/useProtectedPage'
import useRequestDataAuth from '../../../hooks/useRequestDataAuth'
import decideCandidate from '../../../requests/decideCandidate'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/footer/Footer'
import { tripCreationDate } from '../../../utils/tripCreationDate'

import ButtonPattern from '../../../components/ButtonPattern'
import Loading from '../../../components/Loading'
import { Container, CardApproved, InfosGroup, CardCandidates, Candidate, ButtonGroup, CardTrip } from './Styled'


function TripDetailsPage() {
  useProtectedPage()

  const history = useHistory()
  const params = useParams()
  const tripDetails = useRequestDataAuth(`/trip/${params.id}`, {})

  const decision = (result, candidateId) => {
    const body = {
      approve: result
    }

    decideCandidate(body, params.id, candidateId)
  }

  const candidates = tripDetails.trip && tripDetails.trip.candidates.map((candidate) => {
    return (
      <Candidate key={candidate.id}>
        <h1>{candidate.name}</h1>
        <div>
          <span className='Tag'>Idade</span>
          <span className='Contents'>{candidate.age}</span>
        </div>
        <div>
          <span className='Tag'>Profissão</span>
          <span className='Contents'>{candidate.profession}</span>
        </div>
        <div>
          <span className='Tag'>País</span>
          <span className='Contents'>{candidate.country}</span>
        </div>
        <div>
          <span className='Tag'>Motivo</span>
          <span className='Contents'>{candidate.applicationText}</span>
        </div>

        <ButtonGroup>
          <ButtonPattern
            onClick={() => decision(true, candidate.id)}
            name={'Aprovar'}
          />
          <ButtonPattern
            onClick={() => decision(false, candidate.id)}
            name={'Reprovar'}
            variant={'ghost'}
            color={'black'}
          />
        </ButtonGroup>
      </Candidate>
    )
  })

  const approved = tripDetails.trip && tripDetails.trip.approved.map((candidate) => {
    return <p>{candidate.name}</p>
  })

  return (
    <Container>
      <Header colorLogo={'red'} />
      {tripDetails.trip && tripDetails.trip.name ?
        <main>
          <CardTrip>
            <p>{tripDetails.trip && tripDetails.trip.name}</p>
            <span id="description">{tripDetails.trip && tripDetails.trip.description}</span>
            <InfosGroup>
              <div>
                <span>Data</span>
                {tripCreationDate(tripDetails.trip && tripDetails.trip.date)}
              </div>
              <div>
                <span>Dias</span>
                {tripDetails.trip && tripDetails.trip.durationInDays} dias
              </div>
              <div>
                <span>Planeta</span>
                {tripDetails.trip && tripDetails.trip.planet}
              </div>
            </InfosGroup>

            <ButtonPattern
              onClick={() => history.push('/admin/trips/list')}
              name={'Voltar'}
              margin={'1rem'}
            />
          </CardTrip>

          <CardApproved>
            <h3>Aprovados</h3>
            {approved}
          </CardApproved>

          <CardCandidates>
            <h3>Candidatos</h3>
            {candidates}
          </CardCandidates>
        </main>
        :
        <Loading />}

      <Footer />
    </Container >
  )

}

export default TripDetailsPage