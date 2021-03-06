import React from 'react';
import styled from 'styled-components';
import portfolioPhotoUrl from './portfolioPhoto.jpeg';
import "shards-ui/dist/css/shards.min.css";
import Fade from 'react-reveal';
import { size } from '../devices/devices';

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    @media screen and (max-width: ${size.tablet}){
        justify-content: flex-start;
    }
`;

const HeaderTitle = styled.h1`
    font-size: 64px;
    line-height: 1.2;

    @media screen and (max-width: ${size.tablet}){
        margin-top: 30px;
    }
`;

const HeaderSubtitle = styled.h2`
    font-size: 34px;
`;

const PortfolioPhoto = styled.img`
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin: 50px 0;
    @media screen and (max-width: ${size.tablet}){
        margin: 30px 0;
    }
`;

const Header = () => {

    return ( 
        <Container>
            <Fade top duration={5000} forever opposite>
                <HeaderTitle>
                    Mykola Bezkrovnyi
                </HeaderTitle>
            </Fade>
            <Fade top duration={5000} forever opposite>
                <PortfolioPhoto src={portfolioPhotoUrl} />
            </Fade>
            <Fade top duration={5000} forever opposite>
                <HeaderSubtitle>
                    Junior Frontend Developer
                </HeaderSubtitle>
            </Fade>
        </Container>
     );
}
 
export default Header;