import * as React from "react"
import {Box, SimpleGrid, Container, chakra} from "@chakra-ui/react";

import { HashLink } from 'react-router-hash-link';
import {useSearchParams} from "react-router-dom";

const HeaderBox = chakra(Box, {
    baseStyle:{
        fontFamily: `Poiret One`,
        fontSize: '18px'
    }
});

export const Header = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('goose');
    return (
        <Container maxWidth='100vw' p={[2,2,6]} bg='#EFEFEFDD' borderBottom={'1px solid #CCC'}>
            <Container paddingLeft={[0,0,40]} paddingRight={[0,0,40]}>
                <SimpleGrid columns={{base: 2, sm: 3, md: 3, lg:5, xl: 5}} textAlign='center' color='custom.4' fontWeight={'bold'}>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#invite`}>Invitation</HashLink></HeaderBox>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#schedule`}>Schedule</HashLink></HeaderBox>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#registry`}>Registry</HashLink></HeaderBox>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#rsvp`}>RSVP</HashLink></HeaderBox>
                    <HeaderBox><HashLink smooth to={`?goose=${code}#accommodations`}>Accommodations</HashLink></HeaderBox>
                </SimpleGrid>
            </Container>
        </Container>
    );
}