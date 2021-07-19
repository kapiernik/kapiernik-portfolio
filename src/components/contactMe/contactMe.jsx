import React from 'react';
import styled from 'styled-components';
import Title from '../title';
import { Fade } from 'react-reveal';
import socialMedia from './socialMedia.json';
import { v4 as uuidv4 } from 'uuid';
import { size } from '../devices/devices';

const Container = styled.footer`
    min-height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
`;

const StyledTitle = styled(Title)`
    color: #fff;
`;


const SocialMedia = styled.ul`
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    height: 70vh;

    @media screen and (max-width: ${size.tablet}){
        flex-direction: column;
    }
`;

const Copyright = styled.p`
    padding: 40px;
    text-align: center;
    margin: 0;
`;

const Icon = styled.img`
    width: 150px;
    height: auto;
    padding: 30px;
    padding-bottom: 0;
`;

const ContactMe = () => {

    const socialMediaList = socialMedia.map(media => {
        return(
            <li key={uuidv4()}>
                <a href={media.url}>
                    <Icon src={media.imageUrl} alt={media.name} />
                </a>
            </li>
        )
    })

    return ( 
        <Container>
            <Fade top>
                <StyledTitle>
                    Contact me
                </StyledTitle>
            </Fade>
                <SocialMedia>
                    <Fade left>
                    {socialMediaList}
                    </Fade>
                </SocialMedia>
            <Copyright>
                Created by Mykola Bezkrovnyi(kapiernik)
            </Copyright>
        </Container>
     );
}
 
export default ContactMe;