import { Box, Button, Flex, HStack, VStack,Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import ContactCard from '../components/ContactCard'
import { Header } from '../components/header'

export default function Contact() {
  return (
    <Flex direction={'column'} h={'100vh'}>
      <Header/>

      <VStack mt={'4rem'} alignSelf={'center'}>
        <Text  fontSize={'72'} fontWeight='black' color="white"> Contact Me</Text>
        <Text fontSize={'24'} fontWeight='light' color="white">I&apos;d love to hear from you! Here&apos;s how to reach me: </Text>
      
      </VStack>

      <HStack mt={'5rem'} alignSelf={'center'}>
        <ContactCard/>
      </HStack>
      

   
      </Flex>
  )
}
