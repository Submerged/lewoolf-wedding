import {Box, Container, Center, Text} from "@chakra-ui/react";
import * as React from "react";

export const Schedule = () => {
    return (
        <Container id="schedule" maxWidth='100vw' p={0} pt={10}>
            <Center sx={{textAlign: 'center'}}>
                <Box width='100%' bg='primary' pb={[50,50,100]} pt={[20]} color='gray'>
                    <Text as='h2'>Schedule</Text>
                    <Text>
                        <Center textAlign='center'>
                            <br/>
                            3:00 pm - The Wilds Resort - Ceremony
                            <br/>
                            <br/>
                            - break -
                            <br/>
                            <br/>
                            7:00 pm - The Wilds Resort - Dinner reception
                        </Center>
                    </Text>
                </Box>
            </Center>
        </Container>
    );
}