import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import login from '../../../requests/login'

import InputPattern from '../../../components/form/InputPattern'
import ButtonPattern from '../../../components/ButtonPattern'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { IconButton, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Label } from '../../../styles/component/LabelStyles'
import { MessageErrorBox } from '../../../components/messageBox/error/MessageErrorBox'
import { ButtonGroup, Form } from './Styled'

function LoginPage() {
  //Feedback
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState('')

  //Form
  const history = useHistory()

  const initialState = {
    email: '',
    password: ''
  }
  const [form, handleInput] = useForm(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    login(history, form, setMessage, setIsError)
  }

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Form onSubmit={handleSubmit}>

      <InputPattern
        label={'Email'}
        name={'email'}
        placeholder={'usuario@gmail.com'}
        value={form.email}
        onChange={handleInput}
        type={'email'}
        pattern={'[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]+'}
      />

      <Label>Senha</Label>
      <InputGroup size="md">
        <InputPattern
          name={'password'}
          placeholder={"******"}
          value={form.password}
          onChange={handleInput}
          type={show ? "text" : "password"}
        />
        <InputRightElement >

          <IconButton
            onClick={handleClick}
            icon={show ? <ViewIcon /> : <ViewOffIcon />}
            bg={"rgba(0, 0, 0, 0)"}
            _active={{
              bg: "",
              transform: "",
              borderColor: "",
            }}
            _focus={{
              boxShadow: ""
            }}
          />
        </InputRightElement>
      </InputGroup>

            {isError && <MessageErrorBox 
              message={message}
              closeMessage={() => setIsError(false)}
            />}

      <ButtonGroup>
        <button id="sendButton" type='submit'>Entrar</button>
        <ButtonPattern
          onClick={() => history.push('/')}
          name={'Voltar'}
          variant={'ghost'}
          color={'black'}
        />
      </ButtonGroup>
    </Form>
  )
}

export default LoginPage