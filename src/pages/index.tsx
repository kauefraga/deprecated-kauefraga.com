import { Flex, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import Container from '../components/Container'
import Header from '../components/Header'


export default function Home({ }) {
  return (
    <>
      <Header>
        <UnorderedList
          display="flex"
          position="fixed"
          top="5"
          right="5"
          style={{ listStyle: "none" }}
        >
          <ListItem marginRight="5" color="gray.300">
            <Link>Portfolio</Link>
          </ListItem>
          <ListItem marginRight="5" color="gray.300">
            <Link href="/login">Login</Link>
          </ListItem>
          <ListItem color="gray.300">
            <Link>Cadastre-se</Link>
          </ListItem>
        </UnorderedList>
      </Header>
      <Container>


        <h1>Hello world</h1>
      </Container>
    </>
  )
}
