import { Text, Box, Container, Center } from "@chakra-ui/react";
import Countdown from 'react-countdown';
import * as React from "react";

interface CountdownProps {
    total: number,
    days: number,
    hours: number,
    minutes: number,
}
// Renderer callback
const renderer = ({ total, days, hours, minutes } : CountdownProps) => {
    if (total) {
        // Render a countdown
        return (
            <Text as='h3'>
                {days} days, {hours} hours, {minutes} minutes until the big day! 
            </Text>
        );
    } else {
        // Render a finished state
        return <Text as='h3'>TODAY!</Text>;
    }
};
const weddingDate = new Date('2023-10-06T15:00:00')
    .toLocaleString("en-US", {timeZone: "America/St_Johns"});

export const WeddingCountdown = () => {
    return (
        <Container id="countdown" maxWidth='100vw'>
            <Center sx={{textAlign: 'center'}}>
                <Box width='100%' bg='#EFFEFEF' pb={[20,20,50]} pt={[5]}>
                    <Text as='h1'> October 6, 2023 </Text>
                    <Countdown date={weddingDate} renderer={renderer}/>
                </Box>
            </Center>
        </Container>
    );
}