import { HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function SocialMediaNav() {
    return (
        <HStack 
            spacing={["6","8"]}
            mx={["6","20"]}
            pl={["6","20"]}
        >
            <Link href='https://www.linkedin.com/in/pedro-ernesto/' isExternal>
            <Icon color={'yellow'} as={FaLinkedinIn} fontSize="20" />
            </Link>

            <Link href="https://github.com/pedro-ernesto" isExternal>
            <Icon color={'yellow'} as={FaGithub} fontSize="20" />
            </Link>
        </HStack>
    )
}