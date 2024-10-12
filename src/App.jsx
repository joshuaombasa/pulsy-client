import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import Hostlayout from './components/Hostlayout';
import Layout from './components/Layout';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Vans from './components/pages/Vans';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route  path='host'  element={<Hostlayout/>}>
            <Route index element={}/>
            <Route path='income' element={}/>
            <Route path='vans' element={}/>
            <Route path='details' element={}/>
            <Route path='reviews' element={}/>
          </Route>
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
