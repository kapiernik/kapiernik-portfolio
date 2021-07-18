import React from 'react';
import Title from '../title';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { v4 as uuidv4 } from 'uuid';
import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import javascriptIcon from './icons/javascript.png';
import reactIcon from './icons/react.png';
import svelteIcon from './icons/svelte.png';
import typescriptIcon from './icons/typescript.png';
import phpIcon from './icons/php.png';

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
    align-items: center;
    li{
        font-size: 24px;
        color: #000;
        text-align: center;
    }
`;

const Icon = styled.img`
    padding: 30px;
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