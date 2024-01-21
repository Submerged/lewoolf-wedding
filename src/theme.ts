import { extendTheme  } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        primary: '#263430',
        primaryLight: '#7D8275',
        gray: '#CDCFD1',
        charcoal: '#181818',
    },
    components: {
        Button: {
            defaultProps: {
              colorScheme: 'green',
            }
        },
        FormLabel: {
            defaultProps: {
                variant: 'text',
            }
        },
        Radio: {
            defaultProps: {
                variant: 'text',
            }
        },
        Input: {
            defaultProps: {
                variant: 'text',
            }
        },
        NumberInput: {
            defaultProps: {
                variant: 'text',
            }
        }
    },
    styles: {
        global:{
            body: {
                fontFamily: 'Poiret One',
                color: 'primary',
                fontSize: [15, 15, 24],
                bg: '#EFEFEF',
            },
            input: {
                border: '1px solid #999',
                _placeholder:{
                    color: '#444',
                    fontWeight: 'bold',
                    fontFamily: 'Poiret One',
                },
            },
            label: {
                textColor: '#222',
            },
            h1: {
                fontSize: [32, 48, 70],
                fontFamily: 'Great Vibes, cursive',
            },
            h2: {
                fontFamily: 'Sacramento, cursive',
                fontSize: [30, 36, 50],
            },
            h4: {
                fontSize: [12, 14, 18],
            },
            p: {
                fontColor: '#444444',
                fontFamily: 'Poiret One',
                fontSize: [18, 18, 24],
            },
        }
    },
});