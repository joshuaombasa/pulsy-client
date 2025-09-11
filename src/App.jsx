import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import HostLayout from "./components/Hostlayout";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vans from "./components/pages/Vans";

import Dashboard from "./components/pages/host/Dashboard";
import Income from "./components/pages/host/Income";
import HostVans from "./components/pages/host/Hostvans";
import HostVanDetails from "./components/pages/host/Hostvandetails";
import Reviews from "./components/pages/host/Reviews";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="details" element={<HostVanDetails />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
