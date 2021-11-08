import React from 'react'
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Flex, Image,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const EmailInput: React.FC<ChakraInputProps> = (props) => {
  return (
    <Flex
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="purple.500"
      borderRadius="sm"
      color="gray.600"
      alignItems="center"
    >
      <EmailIcon marginLeft={4} />

      <ChakraInput
        color="gray.300"
        fontSize="16px"
        border="none"
        focusBorderColor="none"
        placeholder="Seu melhor e-mail"
        _placeholder={{ color: "gray.400" }}
        autoComplete="off"
        {...props}
      />

    </Flex>
  )
}

export default EmailInput
