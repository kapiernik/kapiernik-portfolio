import React from 'react';
import photo from './photo.jpeg';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

import './aboutMe.css';

const AboutMeBlock = styled.div`
    height: 100vh;
    background-color: #dfdfdf;
    display: grid;
    grid-template-columns: minmax(min-content, 50%) 1fr;
    grid-template-rows: minmax(min-content, min-content) 1fr;
    grid-template-areas: 'title photo' 
                         'description photo';
    align-items: center;
`;

const Title = styled.h2`
    grid-area: title;
    text-align: left;
    margin-left: 50px;
    margin-top: 50px;
    font-size: 4rem;
`;

const Photo = styled.img`
    grid-area: photo;
    border-radius: 5px;
    width: 500px;
    height: auto;
`;

const Description = styled.p`
    font-size: 36px;
    color: #000;
    text-align: left;
    margin-left: 50px;
    align-self: start;
    font-weight: 450;
`;

const AboutMe = () => {
    return ( 
        <AboutMeBlock>
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
        </AboutMeBlock>
     );
}
 
export default AboutMe;