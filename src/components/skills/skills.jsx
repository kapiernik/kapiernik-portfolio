import React from 'react';
import Title from '../title';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import reactIcon from './icons/react.png';
import svelteIcon from './icons/svelte.png';
import typescriptIcon from './icons/typescript.png';
import phpIcon from './icons/php.png';
import webpackIcon from './icons/webpack.png';

const Container = styled.div`
    height: 100vh;
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
`;

const SoftSkills = styled.div`
    width: 50%;
    border-right: 10px solid #0000006c;
`;

const Subtitle = styled.h3`
    font-weight: 600;
    font-size: 40px;
`;

const HardSkills = styled.div`
    width: 50%;
`;

const SoftSkillsList = styled.ul`
    li{
        &::marker{
            color: #ffbb00;
            font-size: 1.5em;
        }
        font-size: 28px;
        color: #000;
        text-align: left;
        margin-left: 80px;
        &:not(:last-of-type){
            margin-bottom: 35px;
        }
    }
`;

const HardSkillsList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 20px;
`;

const Icon = styled.img`
    padding: 30px;
`;

const Skills = () => {

    const iconsUrl = [htmlIcon, cssIcon, reactIcon, svelteIcon, typescriptIcon, phpIcon, webpackIcon];

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
                                    <li>
                                    <Icon src={iconUrl}></Icon>
                                    </li>
                                )
                            })}
                        </HardSkillsList>
                    </Fade>
                </HardSkills>
            </SkillsBlock>
        </Container>
     );
}
 
export default Skills;