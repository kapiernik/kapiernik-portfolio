import React from 'react';
import styled from 'styled-components';
import portfolioPhotoUrl from './portfolioPhoto.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Fade from 'react-reveal';

const HeaderBlock = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

const HeaderTitle = styled.h1`
    font-size: 64px;
`;

const HeaderSubtitle = styled.h2`
    font-size: 34px;
`;

const PortfolioPhoto = styled.img`
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin: 50px 0;
`;

const Header = () => {

    return ( 
        <HeaderBlock>
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
        </HeaderBlock>
     );
}
 
export default Header;