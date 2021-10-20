import React from 'react'
import {
  Flex as ChakraFlex,
  FlexProps as ChakraFlexProps
} from '@chakra-ui/react'

const FlexContainer: React.FC<ChakraFlexProps> = (props) => {
  return (
    <ChakraFlex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.800"
      {...props}
    />
  )
}
export default FlexContainer
