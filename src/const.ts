import {Text, chakra} from "@chakra-ui/react";

export const HEADING_FONT_SIZE = { base: '28px', sm: '30px', md: '36px', lg: '48px' };
export const BODY_FONT_SIZE = { base: '18px', sm: '24px', md: '28px', lg: '30px' };
export const CONTAINER_MAX_WIDTH = '600px';

export const StyledHeading = chakra(Text, {
    baseStyle:{
        fontFamily: `Dancing Script, sans-serif`,
        fontWeight: '500',
        color:'custom.4'
    }
});