import { useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import applyToTrip from '../../../requests/applyToTrip'
import useForm from '../../../hooks/useForm'

import InputPattern from '../../../components/form/InputPattern'
import TextAreaPattern from '../../../components/form/TextAreaPattern'
import SelectPattern from '../../../components/form/SelectPattern'
import ButtonPattern from '../../../components/ButtonPattern'
import { Form, ButtonGroup } from './Styled'
import { MessageSucessBox } from '../../../components/messageBox/sucess/MessageSucessBox'

function ApplicationForm() {
  //Feedback
  const [isSucess, setIsSucess] = useState(false)

  //Form
  const initialState = {
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
    trip: ''
  }
  const [form, handleInput, resetForm] = useForm(initialState)


  const history = useHistory()
  const tripsList = useRequestData('/trips', {})

  const selectTrips = tripsList.trips && tripsList.trips.map((trip) => {
    return <option value={trip.id} key={trip.id}>{trip.name}</option>
  })

  const submitForm = (event) => {
    event.preventDefault()

    const id = form.trip
    applyToTrip(id, form, setIsSucess)
    resetForm()
  }

  return (
    <Form onSubmit={submitForm}>
      <InputPattern
        label={'Nome e sobrenome'}
        name={'name'}
        value={form.name}
        onChange={handleInput}
        type={'text'}
      />
      <InputPattern
        label={'Idade'}
        name={'age'}
        value={form.age}
        onChange={handleInput}
        type={'number'}
        min={18}
      />

      <InputPattern
        label={'Profissão'}
        name={'profession'}
        value={form.profession}
        onChange={handleInput}
        minlength={5}
      />
      <InputPattern
        label={'País'}
        name={'country'}
        value={form.country}
        onChange={handleInput}
      />
      <TextAreaPattern
        label={'Motivo'}
        name={'applicationText'}
        value={form.applicationText}
        onChange={handleInput}
        minlength={30}
      />
      <SelectPattern
        label={'Viagens'}
        name={'trip'}
        value={form.trip}
        onChange={handleInput}
        options={selectTrips}
      />

      {isSucess && <MessageSucessBox
        message={"Sua candidatura foi aplicada com sucesso"}
        closeMessage={() => setIsSucess(false)}
      />}

      <ButtonGroup>
        <button id="sendButton">Enviar</button>
        <ButtonPattern
          onClick={() => history.push('/trips/list')}
          name={'Voltar'}
          variant={'ghost'}
          color={'black'}
        />
      </ButtonGroup>

    </Form>
  )
}

export default ApplicationForm