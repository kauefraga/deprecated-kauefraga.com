import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { Heading, Text, Image } from '@chakra-ui/react'
import FlexContainer from '../../components/Container'

export default function UserProfile() {
  const [username, setUsername] = useState('')
  const [userImage, setUserImage] = useState('')
  const [userDescription, setUserDescription] = useState('')

  useEffect(() => {
    const cookies = parseCookies()
    setUsername(cookies.username)

    setTimeout(() => {
      axios.post('/api/getUserInformation', { username })
        .then(response => {
          console.log(response)
        })
        .catch(err => Router.push('/register'))
    }, 750)
  })


  return (
    <FlexContainer flexDirection="column">
      <Image
        width="250"
        height="250"
        borderRadius="50%"
        src={userImage}
        alt="User image"
      />

      <Heading
        marginTop={4}
        fontSize="6xl"
        color="purple.500"
      >
        {username}
      </Heading>

      <Text
        marginTop={2}
        fontSize="2xl"
        color="gray.300"
      >
        {userDescription}
      </Text>
    </FlexContainer>
  )
}
