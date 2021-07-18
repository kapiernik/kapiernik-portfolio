import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import Title from '../title';
import Card from './card';
import projects from './projects.json';

const Container = styled.section`
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

    const cards = projects.map(project => {
        return (
            <Card name={project.name} imageUrl={project.imageUrl} url={project.url} />
        )
    })

    return ( 
        <Container>
            <Fade top>
                <Title>
                    Projects
                </Title>
            </Fade>
            <Fade left>
                <ProjectsContainer>
                    {cards}
                </ProjectsContainer>
            </Fade>
        </Container>
     );
}
 
export default Projects;