import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { theme } from '../styles/theme'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme = {theme}>
     <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
