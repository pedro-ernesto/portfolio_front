import { Box, Image, Flex} from "@chakra-ui/react";
import { HeaderNav } from "./HeaderNav";
import SocialMediaNav from "./SocialMediaNav";

interface IHeaderProps {
    logo: boolean
}

export function Header (props: IHeaderProps) {
    return (
        <Box
            as="header"
            borderBottom='1px'
            borderBottomColor='gray.800'
            height='80px'
        >
            <Flex            
                w="100%"
                mx="auto"
                h='80px'
                px={8}
                alignItems='center'
                justifyContent= 'space-between'
            >   
                {props.logo &&<Image src="/images/logo_dr1n.svg" alt='logo dr1n'/>}
                <Flex flex={0.65}>                
                    <HeaderNav/>
                    {props.logo &&<SocialMediaNav/>}
                    
                </Flex>

            </Flex>
        </Box>
    )
}