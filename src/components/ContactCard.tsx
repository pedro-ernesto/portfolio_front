import { VStack, Icon, Text, Flex } from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactCard() {
    return (
        <Flex padding={'5rem'} background={'gray.700'} justifyContent={'space-between'}>
        <VStack 
            px={'4rem'}
            spacing={'2rem'}
        >
            <Icon color={'yellow'} as={FaPhone} fontSize="40" />
            <Text fontWeight='light' color="gray.100" >Call me </Text>
            <Text fontWeight='light' color='blue.300' >+55 (31) 92001-3043</Text>
        </VStack>

        <VStack 
            px={'4rem'}
            spacing={'2rem'}
        >
            <Icon color={'yellow'} as={FaEnvelope} fontSize="40" />
            <Text fontWeight='light' color="gray.100" >Send me an e-mail</Text>
            <Text fontWeight='light' color='blue.300' >silveira-pedro@outlook.com</Text>
        </VStack>
        </Flex>
    )
}