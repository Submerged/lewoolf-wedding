import {Box, Container, Center, Stack, Text, Image} from "@chakra-ui/react";
import * as React from "react";
import euc from "../euc2.png";
export const Invite = () => {
    return <Box>
        <Container id="invite" maxWidth={1300} >
            <Center sx={{textAlign: 'center'}}>
                <Box width='100%' border='30px solid #FFF' padding={[50,50,50]} backgroundImage="url('/i-dilby-do/euc-bg.png')" backgroundSize={'cover'} backgroundPosition="center" backgroundRepeat="no-repeat">
                    <Center p={10}>
                        <Image maxHeight={10} objectFit='cover' src={euc} />
                    </Center>
                    <Stack spacing={10} mb={50} mt={10}>
                        <Text as='h1'>Charlotte & Dylan</Text>
                        <Text as='p'>invite you to join them</Text>
                        <Text as='p'>in their wedding celebrations</Text>
                        <Text as='p'>Friday |  Oct 6 | 2023</Text>
                        <Text as='p'>The Wilds Resort</Text>
                        <Text as='p'>643 Salmonier Line, Route 90 South, Holyrood, NL, A0A 2R0</Text>
                        <Text as='p'>with semi-formal reception to follow</Text>
                        <Text as='p'>RSVP & additional details below </Text>
                    </Stack>
                </Box>
            </Center>
        </Container>
    </Box>;
}