import React from 'react';
import Title from '../title';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { v4 as uuidv4 } from 'uuid';
import { size } from '../devices/devices';
import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import javascriptIcon from './icons/javascript.png';
import reactIcon from './icons/react.png';
import svelteIcon from './icons/svelte.png';
import typescriptIcon from './icons/typescript.png';
import phpIcon from './icons/php.png';

const Container = styled.section`
    min-height: 100vh;
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
`;

const TitleBlock = styled.div`
    margin-bottom: 50px;
`;

const SkillsBlock = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: ${size.laptop}){
        flex-direction: column;
        align-items: center;
    }
`;

const SoftSkills = styled.div`
    width: 50%;

    @media screen and (max-width: ${size.laptopL}){
        margin-bottom: 50px;
    }
`;

const Subtitle = styled.h3`
    font-weight: 600;
    font-size: 40px;
    line-height: 1.5;
`;

const HardSkills = styled.div`
    width: 50%;
`;

const SoftSkillsList = styled.ul`

    @media screen and (max-width: 540px){
            list-style-type: none;
        }

    li{
        &::marker{
            color: #ffbb00;
            font-size: 1.5em;
        }
        font-size: 28px;
        color: #000;
        text-align: left;
        &:not(:last-of-type){
            margin-bottom: 35px;
        }

        @media screen and (min-width: ${size.laptop}){
            margin-left: 80px;
        }

        @media screen and (max-width: 540px){
            font-size: 22px;
            text-align: center;
            &:first-of-type{
                margin-top: 30px;
            }
        }
    }
`;

const HardSkillsList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    li{
        font-size: 24px;
        color: #000;
        text-align: center;
    }

    @media screen and (max-width: ${size.laptop}){
        flex-direction: column;
        margin-left: 0;
        li:last-of-type{
            margin-bottom: 50px;
        }
    }
`;

const Icon = styled.img`
    padding: 30px;
    @media screen and (max-width: ${size.mobileL}){
        padding: 30px 0;
    }
`;

const Skills = () => {

    const iconsUrl = [htmlIcon, cssIcon, javascriptIcon, reactIcon, svelteIcon, typescriptIcon, phpIcon];

    return ( 
        <Container>
            <TitleBlock>
                <Fade top>
                    <Title>
                        Skills
                    </Title>
                </Fade>
            </TitleBlock>
            <SkillsBlock>
                <SoftSkills>
                    <Fade top>
                        <Subtitle>
                            Soft Skills
                        </Subtitle>
                    </Fade>
                    <Fade top cascade>
                        <SoftSkillsList>
                            <li>
                                Creativity
                            </li>
                            <li>
                                Team Working
                            </li>
                            <li>
                                Communication Skills
                            </li>
                            <li>
                                Intelligence
                            </li>
                        </SoftSkillsList>
                    </Fade>
                </SoftSkills>
                <HardSkills>
                    <Fade top>
                        <Subtitle>
                            Hard Skills
                        </Subtitle>
                    </Fade>
                    <Fade left cascade>
                        <HardSkillsList>
                            {iconsUrl.map((iconUrl) => {
                                return (
                                    <li key={uuidv4()}>
                                    <Icon src={iconUrl}></Icon>
                                    </li>
                                )
                            })}
                            <li key={uuidv4()}>
                                Et cetera...
                            </li>
                        </HardSkillsList>
                    </Fade>
                </HardSkills>
            </SkillsBlock>
        </Container>
     );
}
 
export default Skills;