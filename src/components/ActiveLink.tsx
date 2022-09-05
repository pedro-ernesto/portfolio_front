import { Box, Stack } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";


interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({children, shouldMatchExactHref = false, ...rest}: ActiveLinkProps) {
    const { asPath } = useRouter();
    let isActive = false;

    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath === rest.as)) {
        isActive = true;
    }

    if (isActive) {
        return (
            <Stack
                _after={{
                    content: '""',
                    background: 'yellow',
                    h: '0.1875rem',
                    w: '100%',
                    bottom: '1px',
                    left: 0,
                    borderTopRadius: '3px',
                    position:'relative'
                }}
            >
                <Link {...rest}>
                    {cloneElement(children, {
                        color: 'gray.100'
                    })}
                </Link>

            </Stack>
        )
    }
    return (
        <Stack
        _after={{
            content: '""',
            background: 'gray.900',
            h: '3px',
            w: '100%',
            bottom: '1px',
            left: 0,
            borderTopRadius: '3px',
            position:'relative'
        }}
    >
        <Link {...rest}>
            {cloneElement(children, {
                color: 'gray.400'
            })}
        </Link>

    </Stack>

    )
}