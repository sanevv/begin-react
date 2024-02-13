import React from 'react';
import Main from '../components/section/Main';
import Portfolio from '../components/contents/Portfolio'
import Today from '../components/contents/Today'

const Home = () => {
  return (
    <Main>
      <Portfolio />
      <Today />
    </Main>
  );
};

export default Home;