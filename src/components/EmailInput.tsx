import React from 'react'
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Flex
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <Flex
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="purple.500"
      color="gray.600"
      borderRadius="sm"
      alignItems="center"
    >
      <EmailIcon color="gray.700" marginLeft="3" />

      <ChakraInput
        fontSize="16px"
        color="gray.300"
        border="none"
        focusBorderColor="none"
        placeholder="E-mail"
        _placeholder={{ color: "gray.400" }}
        {...props}
      />

    </Flex>
  )
}

export default Input
