import React from 'react';
import Main from '../components/section/Main';
import Portfolio from '../components/contents/Portfolio'
import Today from '../components/contents/Today'
import Intro from '../components/contents/Intro'

const Home = () => {
  return (
    <Main>
      <Portfolio />
      <Today />
      <Intro />
    </Main>
  );
};

export default Home;