import { Link as ChakraLink, LinkProps as ChakraLinkProps, Stack, Text } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

// Quando passa só o nome do componente, é um element type - Icon as={RiDashboardLine} 
interface NavLinkProps extends ChakraLinkProps {
    children: string;
    href: string;
    shouldMatchExactHref?: boolean;
}

export default function NavLink({ children,shouldMatchExactHref = false, href, ...rest}: NavLinkProps) {
    return (<ActiveLink shouldMatchExactHref={shouldMatchExactHref} href={href} passHref>
                    <ChakraLink 
                        fontWeight={'regular'}
                        px={3}
                        height='77px'
                        lineHeight='80px'
                        {...rest}
                    >
                        {children}
                    </ChakraLink>
                </ActiveLink>
    )
}