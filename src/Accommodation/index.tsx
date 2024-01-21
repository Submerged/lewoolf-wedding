import {Box, Container, Center, Text, Link} from "@chakra-ui/react";
import * as React from "react";

export const Accommodation = () => {
    return (
        <Container id="accommodations" maxWidth='100vw' p={0}>
            <Center sx={{textAlign: 'center'}}>
                <Box width='100%' bg='#CCC' pb={[50,50,100]} pt={[20]}>
                    <Text as='h2'>Accommodations</Text>
                    <Text textAlign='center' p={[2,10,10]}>
                        There are several places to stay near Marble Mountain. We have reserved a block of rooms at the {' '}
                        <Link href= 'https://skimarble.com/marble-villa/' isExternal color='teal.500'>
                            Marble Villas.
                        </Link> Liane will be very excited to book you as part of the WOOLFREY/LEBLANC wedding.
                    <br/>
                    <br/>
                    For accomodations within walking distance, there are a number of options:
                    <br/>
                    Marble Villas (100m, on the property)
                    <br/>
                    George’s Mountain Ski Cabins (550m, &lt;10 min walk)
                    <br/>
                    Marblewood Village Resort (650m, &lt;10 min walk)
                    <br/>
                    Marble Inn Resort (450m, &lt;10 min walk, under the highway)
                    <br/>
                    Edgewater Inn/Air Bnb (Several in the town of Steady Brook & area)
                    <br/>
                    Strawberry Hill, Humber Resort, Humber Chalets (15km, 12 min drive)
                    <br/>
                    Corner Brook (10 km, 12 min drive)
                    </Text>
                    <br/>
                    <Text as='h4'>
                        Getting to Newfoundland & Getting around Newfoundland
                    </Text>
                    <Center textAlign='center' as ='h4'>
                        <Box width='75%'>
                        <br/>
                        Newfoundland is an island, only accessible by boat or plane. If you’re already here, you don’t need to worry about that. If you’re not, there are several ports for ferries and planes scattered across the island, so be sure to pick the one that works best for you! 
                        <br/>
                        <br/>
                        Note: St. John’s (where Bronwyn & Derek live) is 7 hours drive from Steady Brook (where Bronwyn & Derek are getting married). NL is bigger than it looks!. 
                        <br/>
                        <br/>
                        The closest airport: Deer Lake (45 km, 30 minute drive) to Steady Brook)
                        <br/>
                        The closest ferry port: Port Aux Basques (225 km, 2.5 hour drive) to Steady Brook)
                        <br/>
                        <br/>
                        Once on the island, the only way to Marble Mountain is via car or cab.
                        <br />
                        Rental Cars: Enterprise, etc, Turo app
                        <br />
                        Taxi: Birchy Cab, xxx
                        <br />
                        Buses: Do not go to Marble (local buses, cross-province DRL)
                        <br />
                        Uber: Does NOT exist here.
                        <br />
                        Ride Share (An attempt will be made):
                        If you’d like to indicate interest in sharing rides with others (and have a car, or need a lift), click here, and we’ll see if we can connect you with other guests! Indicate your arrival date/time, we can try to help get ya from the bus station or airport! 
                        <br/>  
                        <br/>                      
                        Important Notes: 
                        <br/>
                        1. If you take the ferry, night crossing cabins book up very quickly for the summer!
                        <br/>
                        2. Corner Brook is having its “Jigs and Wheels” Festival from July 27 - Aug 3 where they will make ATVs and Dirt Bikes legal to drive on the roads for the week, so watch out for that. There will be extra activities happening in the city around this time as well.                         
                        </Box>
                    </Center>
                </Box>
            </Center>
        </Container>
    );
}