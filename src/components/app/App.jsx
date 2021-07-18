import React from 'react';
import Header from '../header';
import AboutMe from '../aboutMe';
import Skills from '../skills';
import Projects from '../projects';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </AppContainer>
  );
}

export default App;
