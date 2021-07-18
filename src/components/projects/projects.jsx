import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import Title from '../title';
import Card from './card';

const Container = styled.div`
    min-height: 100vh;
    background-color: #9C9C9C;
    display: flex;
    flex-direction: column;
    align-content: unset;
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px;
`;

const Projects = () => {
    return ( 
        <Container>
            <Fade top>
                <Title>
                    Projects
                </Title>
            </Fade>
            <Fade left>
                <ProjectsContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ProjectsContainer>
            </Fade>
        </Container>
     );
}
 
export default Projects;