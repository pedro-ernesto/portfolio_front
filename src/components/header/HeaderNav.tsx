
import {HStack } from "@chakra-ui/react";
import NavLink from "./NavLink";

export function HeaderNav() {
    return (
        <HStack spacing={8} h='80px'>
            <NavLink shouldMatchExactHref={true} href='/' >Home</NavLink>
            <NavLink href='/work' >Work</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
            <NavLink
                href='https://drive.google.com/file/d/1srTpqKszBoKz9MOf6HTi5hW5EHAMVDJH/view?usp=sharing' 
                isExternal
                
            >
                Resume</NavLink>
        </HStack>
    )
}