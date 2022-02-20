import React from 'react'
import Head from 'next/head'

import { Link, Heading, ListItem, UnorderedList, Flex } from '@chakra-ui/react'
import { IconSM, KaueGithubIcon } from '../components/Icons'
import FlexContainer from '../components/Container'

export default function InitialScreen({ }) {
  return (
    <>
      <Head>
        <meta name="description" content="This page is door of own application"/>
        <title>Home | Kauê Fraga</title>
      </Head>
      <Flex as="header" position="fixed">
        <UnorderedList
          display="flex"
          position="fixed"
          alignItems="center"
          top="5"
          right="5"
          style={{ listStyle: "none" }}
        >
          <ListItem marginRight="7" fontSize="lg" color="gray.300">
            <Link href="/portfolio">Portfolio</Link>
          </ListItem>
          <ListItem marginRight="7" fontSize="lg" color="gray.300">
            <Link href="/newsletter/">Newsletter</Link>
          </ListItem>
        </UnorderedList>
      </Flex>
      <FlexContainer flexDirection="column" color="gray.300">
        <KaueGithubIcon marginBottom={4} />
        <Heading as="h1" fontSize="4xl" color="purple.600">
          <Link target="_blank" href="https://github.com/kauefraga" rel="noopener">Kauê Fraga Rodrigues</Link>
        </Heading>
        <Heading as="h2" marginTop="5px" fontSize="3xl" color="gray.300">Fullstack engineer</Heading>

        <Flex as="footer" position="fixed" bottom="5" alignItems="center">
          <IconSM marginRight="4" src="/icons/ts-icon.svg" alt="Typescript icon" />
          <IconSM marginRight="4" src="/icons/nodejs-icon.svg" alt="Nodejs icon" />
          <IconSM marginRight="4" src="/icons/nextjs-icon.svg" alt="Nextjs icon" />
          <IconSM marginRight="4" src="/icons/reactjs-icon.svg" alt="Reactjs icon" />
          <IconSM src="/icons/electron-icon.svg" alt="Electron icon" />
        </Flex>
      </FlexContainer>
    </>
  )
}
