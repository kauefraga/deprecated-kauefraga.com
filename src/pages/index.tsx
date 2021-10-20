import React from 'react'
import Head from 'next/head'
import { Link, Heading, ListItem, UnorderedList, Image, Flex } from '@chakra-ui/react'
import FlexContainer from '../components/Container'
import Header from '../components/Header'

export default function Home({ }) {
  return (
    <>
      <Header>
        <UnorderedList
          display="flex"
          position="fixed"
          alignItems="center"
          top="5"
          right="5"
          style={{ listStyle: "none" }}
        >
          <ListItem marginRight="7" fontSize="lg" color="gray.300">
            <Link href="/extras/portfolio">Portfolio</Link>
          </ListItem>
          <ListItem marginRight="7" fontSize="lg" color="gray.300">
            <Link href="/login">Login</Link>
          </ListItem>
          <ListItem
            backgroundColor="purple.500"
            borderRadius="sm"
            padding={2.5}
            fontSize="xl"
            color="gray.300"
            _hover={{ backgroundColor: 'purple.600' }}
          >
            <Link href="/signup">Cadastre-se</Link>
          </ListItem>
        </UnorderedList>
      </Header>
      <FlexContainer flexDirection="column" color="gray.300">
        <Heading as="h1" fontSize="4xl" color="purple.600"> <Link target="_blank" href="https://github.com/kauefraga">Kauê Fraga Rodrigues</Link> </Heading>
        <Heading as="h2" marginTop="5px" fontSize="3xl" color="gray.400">Fullstack engineer</Heading>

        <Flex position="fixed" bottom="5">
          <Image marginRight="4" width="35px" height="45px" src="/ts-icon.svg" alt="Typescript icon" />
          <Image marginRight="4" width="35px" height="45px" src="/nodejs-icon.svg" alt="Nodejs icon" />
          <Image marginRight="4" width="50px" height="45px" src="/nextjs-icon.svg" alt="Nextjs icon" />
          <Image marginRight="4" width="35px" height="45px" src="/reactjs-icon.svg" alt="Reactjs icon" />
          <Image width="35px" height="45px" src="/electron-icon.svg" alt="Electron icon" />
        </Flex>
      </FlexContainer>
    </>
  )
}
