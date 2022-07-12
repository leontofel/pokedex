import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Search from './pages/Search/Search';

function App() {
  return (
    <>
    <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App;
