import React, { useEffect } from 'react'
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Link,
  Flex
} from '@chakra-ui/react'
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const Input: React.FC<ChakraInputProps> = (props) => {
  useEffect(() => {
    const passwordInput = document.getElementById('input')
    const hidePasswordImage = document.getElementById('hide-password')

    hidePasswordImage.addEventListener('mousedown', () => {
      passwordInput.setAttribute('type', 'text')
    })
    hidePasswordImage.addEventListener('mouseup', () => {
      passwordInput.setAttribute('type', 'password')
    })
    hidePasswordImage.addEventListener('mousemove', () => {
      passwordInput.setAttribute('type', 'password')
    })
  })

  return (
    <Flex
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="purple.500"
      borderRadius="sm"
      alignItems="center"
      marginTop="3"
    >
      <LockIcon color="gray.700" marginLeft="3" />

      <ChakraInput
        id="input"
        color="gray.300"
        fontSize="16px"
        border="none"
        focusBorderColor="none"
        placeholder="Senha"
        _placeholder={{ color: "gray.400" }}
        type="password"
        autoComplete="off"
        {...props}
      />

      <Link id="hide-password" marginRight="3">
        <ViewIcon id="ViewOn" color="purple.600" />
      </Link>
    </Flex>
  )
}

export default Input
