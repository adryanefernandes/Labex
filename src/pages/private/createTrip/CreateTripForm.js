import { useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import createTrip from '../../../requests/createTrip'
import InputPattern from '../../../components/form/InputPattern'
import SelectPattern from '../../../components/form/SelectPattern'
import TextAreaPattern from '../../../components/form/TextAreaPattern'
import ButtonPattern from '../../../components/ButtonPattern'
import { ButtonSend } from '../../../styles/component/ButtonSendStyles'
import { ButtonGroup, Form } from './Styled'
import { currentDate } from '../../../utils/currentDate'

function CreateTripForm() {
  const history = useHistory()

  const initialState = {
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  }
  const [form, handleInput, resetForm] = useForm(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()

    createTrip(form)
    resetForm()
  }

  const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']
  const optionsSelect = planets.map((item) => {
    return <option value={item}>{item}</option>
  })

  return (
    <Form onSubmit={handleSubmit}>
      <InputPattern
        label={'Nome'}
        placeholder={'Viagem a marte'}
        name={'name'}
        value={form.name}
        onChange={handleInput}
        type={'text'}
        pattern={'(.*[a-z]){5}'}
        title={"Nome deve ter no mínimo 5 letras"}
      />

      <SelectPattern
        label={'Planeta de destino'}
        name={'planet'}
        value={form.planet}
        onChange={handleInput}
        options={optionsSelect}
      />
      <InputPattern
        label={'Data'}
        placeholder='Data'
        name={'date'}
        value={form.date}
        onChange={handleInput}
        type={'date'}
        min={currentDate()}
      />
      <TextAreaPattern
        label={'Descrição'}
        placeholder='Descrição'
        name={'description'}
        value={form.description}
        onChange={handleInput}
        type={'text'}
        minLength={'30'}
        title="Texto deve ter no mínimo 30 letras"
      />
      <InputPattern
        label={'Duração em dias'}
        placeholder='Duração'
        name={'durationInDays'}
        min={50}
        value={form.durationInDays}
        onChange={handleInput}
        type={'number'}
      />
      <ButtonGroup>
        <ButtonSend>Criar</ButtonSend>

        <ButtonPattern
          onClick={() => history.push('/admin/trips/list')}
          name={'Voltar'}
          variant={'ghost'}
          color={'black'}
        />
      </ButtonGroup>
    </Form>
  )
}

export default CreateTripForm