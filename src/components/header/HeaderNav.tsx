
import {HStack } from "@chakra-ui/react";
import NavLink from "./NavLink";

export function HeaderNav() {
    return (
        <HStack spacing={8} h='80px'>
            <NavLink shouldMatchExactHref={true} href='/' >Home</NavLink>
            <NavLink href='/work' >Work</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
            <NavLink
                href='https://drive.google.com/file/d/105-xNztPvW-kdjKE20w3LWr3XbShJRM4/view?usp=sharing' 
                isExternal
            >
                Resume</NavLink>
        </HStack>
    )
}