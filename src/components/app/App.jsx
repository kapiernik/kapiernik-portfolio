import React from 'react';
import Header from '../header';
import AboutMe from '../aboutMe';
import Skills from '../skills';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
