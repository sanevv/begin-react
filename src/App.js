import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Gsap = lazy(() => import('./pages/Gsap'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Today = lazy(() => import('./pages/Today'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Main />}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gsap' element={<Gsap />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/today' element={<Today />} />
            <Route path='*' element={<Not />} />
        </Routes>
    </Suspense>
    </BrowserRouter>
  );
};

export default App;