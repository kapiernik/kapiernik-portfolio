import React from 'react';
import photo from './photo.jpeg';
import Title from '../title';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { size } from '../devices/devices';

import './aboutMe.css';

const Container = styled.section`
    min-height: 100vh;
    background-color: #fafafa;
    display: grid;
    grid-template-columns: minmax(min-content, 50%) 1fr;
    grid-template-rows: minmax(min-content, min-content) 1fr;
    grid-template-areas: 'title photo' 
                         'description photo';

    @media screen and (max-width: ${size.laptop}){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    align-items: center;
`;

const Photo = styled.img`
    grid-area: photo;
    border-radius: 5px;
    width: 500px;
    height: auto;

    @media screen and (max-width: ${size.laptop}){
        width: 350px;
        margin: 30px 0;
    }
`;

const Description = styled.p`
    font-size: 36px;
    color: #000;
    text-align: left;
    margin-left: 50px;
    align-self: start;
    font-weight: 400;

    @media screen and (min-width: ${size.laptopL}){
        margin-top: -70px;
    }

    @media screen and (max-width: ${size.laptop}) {
        font-size: 24px;
        margin: 50px;
        margin-top: 0;
    }
    
    @media screen and (max-width: 1100px){
        font-size: 30px;
    }
`;

const AboutMe = () => {
    return ( 
        <Container>
            <Fade top distance="50px">
                <Title>
                    About me
                </Title>
            </Fade>
            <Fade top distance="50px">
                <Photo src={photo} />
            </Fade>
            <Fade top distance="50px">
                <Description>
                    Hi, my name is Mykola Bezkrovny! I'm 16 years old and i E X T R E M L Y
                    love the frontend. My first step this path was made one year ago and i still
                    like to make sites and learn more and more knowledges.
                </Description>
            </Fade>
        </Container>
     );
}
 
export default AboutMe;