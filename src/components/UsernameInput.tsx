import React from 'react'
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Flex, Image,
} from '@chakra-ui/react'

const UsernameInput: React.FC<ChakraInputProps> = (props) => {
  return (
    <Flex
      marginTop={2}
      height="50px"
      backgroundColor="gray.800"
      borderRadius="sm"
      color="gray.600"
      alignItems="center"
    >
      <Image marginLeft={4} src="/icons/user.svg" alt="User" />

      <ChakraInput
        color="gray.300"
        fontSize="16px"
        border="none"
        _placeholder={{ color: "gray.400" }}
        autoComplete="off"
        {...props}
      />

    </Flex>
  )
}

export default UsernameInput
