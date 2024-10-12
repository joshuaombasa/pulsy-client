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
import Dashboard from './components/pages/host/Dashboard';
import Income from './components/pages/host/Income';
import Hostvans from './components/pages/host/Hostvans';
import Hostvandetails from './components/pages/host/Hostvandetails';
import Reviews from './components/pages/host/Reviews';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route  path='host'  element={<Hostlayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='income' element={<Income/>}/>
            <Route path='vans' element={<Hostvans/>}/>
            <Route path='details' element={<Hostvandetails/>}/>
            <Route path='reviews' element={<Reviews/>}/>
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
