// import Head from 'next/head'
import { Heading, Grid, Flex, Link, Image, Button, Text } from '@chakra-ui/react'
import Divider from '../components/Divider'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'

export default function Home() {
  return (
    <Grid
      as="main"
      backgroundColor="gray.800"
      color="gray.300"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <Heading color="purple.500">
          Kauê Fraga Rodrigues
        </Heading>

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Faça seu login na aplicação
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDirection="column"
        alignItems="stretch"

        padding={16}
      >

        <EmailInput />

        <PasswordInput marginTop={2} />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: 'purple.500' }}
          href="/forgot"
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
            href="/signup"
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'purple.500' }}
          >
            <Image width="12" height="12" src="/icons/google.png" alt="icon" />
            GOOGLE
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
