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
                        <Text as='h1'>Bronwyn & Derek</Text>
                        <Text as='p'>together with their families</Text>
                        <Text as='p'>are preparing for their wedding celebrations</Text>
                        <Text as='p'>Saturday |  Aug 3 | 2024</Text>
                        <Text as='p'>Marble Mountain</Text>
                        <Text as='p'>2 Marble Dr, Steady Brook, NL A2H 2N2</Text>
                        <Text as='p'>with reception to follow</Text>
                        <Text as='p'>additional details below </Text>
                    </Stack>
                </Box>
            </Center>
        </Container>
    </Box>;
}