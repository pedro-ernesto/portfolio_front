import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Header } from '../components/header'

export default function Home() {

  const [width, setWidth] = useState<number>(null);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 850;
  return (
    <Flex direction={'column'} h={'100vh'}>
      <Header logo={!isMobile}/>
      <Flex
        maxWidth="1120px"
        mx="auto"
        marginBottom={'auto'}
        padding={2}
        align={'center'}
        justifyContent='space-between'
        mt={20}
      >
        <Box maxWidth='600px'>
          <Text fontSize={['10px','15px','20px']} fontWeight='regular' color="yellow"> Hi, my name is</Text>
          <Text fontSize={['25','50','72']} fontWeight='black' color="white"> Pedro Ernesto</Text>
          <Text fontSize={['25','50','72']} fontWeight='black' color="gray.300"> I develop things</Text>
          <Text mt={4} fontSize={['15','20','24']} fontWeight='light' color="white"> I’m a Brazilian Full Stack Dev specialized in building web
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

        {!isMobile && <Image src="/images/cartoon_dr1n.svg" alt='cartoon dr1n'/>}
      </Flex>
      </Flex>
  )
}
