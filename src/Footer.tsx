import {Box, SimpleGrid} from "@chakra-ui/react";
import {HashLink} from "react-router-hash-link";
import * as React from "react";

export const Footer = () => {
    return (
        <Box p={[4,4,20]} height={100} bg='primary' color='#CCC'>
            <SimpleGrid columns={{base: 2, sm: 3, md: 3, lg:6, xl: 6}} textAlign='center' color='custom.4'>
                <HashLink smooth to="#invite">Home</HashLink>
                <HashLink smooth to="#invite">Invitation</HashLink>
                <HashLink smooth to="#schedule">Schedule</HashLink>
                <HashLink smooth to="#registry">Registry</HashLink>
                <HashLink smooth to="#rsvp">RSVP</HashLink>
                <HashLink smooth to="#accommodations">Accommodations</HashLink>
            </SimpleGrid>
        </Box>
);
}