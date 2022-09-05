import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Header } from '../components/header'

export default function Home() {
  return (
    <Flex direction={'column'} h={'100vh'}>
      <Header/>
      <Flex
        maxWidth="1120px"
        mx="auto"
        padding={2}
        align={'center'}
        justifyContent='space-between'
        mt={20}
      >
        <Box maxWidth='600px'>
          <Text fontSize={'20px'} fontWeight='regular' color="yellow"> Hi, my name is</Text>
          <Text fontSize={'72'} fontWeight='black' color="white"> Pedro Ernesto</Text>
          <Text fontSize={'72'} fontWeight='black' color="gray.300"> I develop things</Text>
          <Text mt={4} fontSize={'24'} fontWeight='light' color="white"> I’m a Brazilian Full Stack Dev specialized in building web
            and mobile apps with react, react native and node.js.</Text>

          <Link href={`/work`}>
            <Button 
            mt={10}
            fontSize={'20px'}
            fontWeight={"semibold"} 
            borderRadius={'100px'} width="260px" h="64px" background={"yellow"} color="black">Explore my work
            </Button>
          </Link>
        </Box>

        <Image src="/images/cartoon_dr1n.svg" alt='cartoon dr1n'/>
      </Flex>
      </Flex>
  )
}
