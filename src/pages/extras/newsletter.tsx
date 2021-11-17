import React, { FormEvent, useState } from 'react'
import { Flex, Heading, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import FlexContainer from '../../components/Container'
import EmailInput from '../../components/EmailInput'

export default function Newsletter({ }) {
  const [email, setEmail] = useState('')

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault()

    axios.post('/api/subscribe', { email })
  }

  return (
    <FlexContainer color="gray.300">
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Heading textAlign="center" color="purple.500" marginBottom={4}>Inscrever-se na newsletter</Heading>

        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={4}>
          Assine a newsletter do Kauê Fraga
        </Text>

        <EmailInput
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          INSCREVER
        </Button>
      </Flex>
    </FlexContainer>

  )
}
