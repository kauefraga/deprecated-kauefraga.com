import React, { FormEvent, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { Flex, Heading, Button, Text } from '@chakra-ui/react'
import FlexContainer from '../../components/Container'
import EmailInput from '../../components/EmailInput'

export default function Newsletter({ }) {
  const [email, setEmail] = useState('')

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault()

    axios.post('/api/newsletter/subscribe', { email })
  }

  return (
    <>
      <Head>
        <meta name="description" content="This is a simple newsletter"/>
        <title>Newsletter | Kauê Fraga</title>
      </Head>
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
          <Heading textAlign="center" color="purple.500" marginBottom={4}>Subscribe in newsletter</Heading>

          <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={4}>
            Subscribe into Kauê's newsletter to get sweet content.
          </Text>

          <EmailInput
            value={email}
            placeholder="Your better email"
            onChange={event => setEmail(event.target.value)}
          />

          <Button
            type="submit"
            backgroundColor="purple.500"
            height="50px"
            borderRadius="sm"
            marginTop={6}
            _hover={{ backgroundColor: 'purple.600' }}
          >
            SUBSCRIBE
          </Button>
        </Flex>
      </FlexContainer>
    </>
  )
}
