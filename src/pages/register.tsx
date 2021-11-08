import React, { FormEvent, useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { setCookie } from 'nookies'
import { Flex, Heading, Text, Button, } from '@chakra-ui/react'
import FlexContainer from '../components/Container'
import UsernameInput from '../components/UsernameInput'

export default function Register() {
  const [username, setUsername] = useState('')
  const [socialUsername, setSocialUsername] = useState('')
  const [spanError, setSpanError] = useState(false)

  function handleRegister(event: FormEvent) {
    event.preventDefault()

    const createdAt = new Date()

    axios.post('/api/register', { username, socialUsername, createdAt })
      .then(response => {

        saveAllCookies(username, socialUsername, createdAt)

        return Router.push(`/profile/${username}`)
      })
      .catch(err => { setSpanError(true) })
  }

  useEffect(() => {
    const span = document.getElementById('span')
    if (spanError == true) {
      span.style.color = '#FF4033'
      span.innerText = 'Usuário já existe'
      span.style.fontWeight = 'bold'
      setTimeout(() => {
        setSpanError(false)
      }, 5000)
    } else {
      span.style.color = '#70707e'
      span.innerText = 'Informe um nome de usuário de sua preferência'
      span.style.fontWeight = 'normal'
    }
  })

  return (
    <FlexContainer color="gray.300">
      <Flex
        as="form"
        onSubmit={handleRegister}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Heading textAlign="center" color="purple.500" marginBottom={4}>Faça seu registro</Heading>

        <Text as="span" id="span"
          textAlign="center"
          fontSize="sm"
          color="gray.400"
          marginBottom={4}
        >
          Informe um nome de usuário de sua preferência
        </Text>

        <UsernameInput
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
          isRequired
        />

        <UsernameInput
          placeholder="Usuário do Twitter ou Github"
          value={socialUsername}
          onChange={e => setSocialUsername(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          REGISTRAR
        </Button>
      </Flex>
    </FlexContainer>
  )
}


function saveAllCookies(firstValue: string, secondValue: string, createdAt?: Date) {
  setCookie(null, 'username', firstValue, {
    maxAge: createdAt.getDay() + 1, // 1 hours = 60 * 60
    path: '/',
  })

  setCookie(null, 'socialname', secondValue, {
    maxAge: createdAt.getDay() + 1, // 1 hours = 60 * 60
    path: '/',
  })
}
