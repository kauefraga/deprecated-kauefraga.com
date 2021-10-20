import React from 'react'
import { Flex as ChakraFlex, FlexProps as ChakraFlexProps } from '@chakra-ui/layout'

const Header: React.FC<ChakraFlexProps> = (props) => {
  return (
    <ChakraFlex
      as="header"
      position="fixed"
      {...props}
    />
  )
}

export default Header;
