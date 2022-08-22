import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            '900': '#121414',
            '400': '#A8A8B3',
            '300': '#C0C0C0',

        },
        yellow:'#F4D908',
        white: '#ffffff'
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'white'
            }
        }
    }
})