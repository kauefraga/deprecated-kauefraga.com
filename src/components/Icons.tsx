import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
} from '@chakra-ui/react'
// import {  } from '@chakra-ui/icons'

export const IconSM: React.FC<ChakraImageProps> = (props) => {
  return (
    <>
      <ChakraImage
        width={12}
        height={12}
        {...props}
      />
    </>
  )
}

export const KaueGithubIcon: React.FC<ChakraImageProps> = (props) => {
  return (
    <>
      <ChakraImage
        src="https://github.com/kauefraga.png"
        width={32}
        height={32}
        borderRadius="50%"
        {...props}
      />
    </>
  )
}
