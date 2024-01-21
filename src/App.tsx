import * as React from "react"
import {
    ChakraProvider,
    Box,
    Image,
    Center,
    Container,
} from "@chakra-ui/react"
import {Footer} from "./Footer";
import {theme} from './theme';
import hero from './hero.jpg';
import euc from "./euc2.png";
import { WeddingCountdown } from './WeddingCountdown';
import { Header } from './Header';
import { Invite } from './Invite';
import { Schedule } from './Schedule';
import { Rsvp } from './Rsvp';
import {Registry} from "./Registry";
import { Accommodation } from './Accommodation';
export const App = () => (
    <ChakraProvider theme={theme}>
        <Box>
            <Box width='100%' sx={{ position: 'sticky', top: '0', zIndex:20 }}>
                <Header/>
            </Box>
            <Invite />
            <Center p={70}>
                <Image maxHeight={10} objectFit='cover' src={euc} />
            </Center>
            <WeddingCountdown />
            <Center p={70}>
                <Image maxHeight={10} objectFit='cover' src={euc} />
            </Center>
            <Container id="invite" maxWidth={1300}>
                <Box width='100%' border='30px solid #FFF'>
                    {/*<Image src={hero} />*/}
                </Box>
            </Container>
            <Schedule />
            <Registry />
            <Center p={70}>
                <Image maxHeight={10} objectFit='cover' src={euc} />
            </Center>
            {/* <Rsvp />
            <Center p={70}>
                <Image maxHeight={10} objectFit='cover' src={euc} />
            </Center> */}
            <Accommodation />
            <Footer/>
        </Box>
    </ChakraProvider>
)
