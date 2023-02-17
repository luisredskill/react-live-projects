import { HashRouter,BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import ReactFacts from '../Projetos/react_facts/Components/React_facts';
import BusinessCard from '../Projetos/business_card/Components/Business_card';

import AirbnbClone from '../Projetos/airbnb_clone/Components/Airbnb_clone';

import Home from '../Home';




function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/react-live-projects" element={<Home/>}/>
        <Route path="/react-live-projects/ReactFacts" element={<ReactFacts/>}/>
        <Route path="/react-live-projects/BusinessCard" element={<BusinessCard />}/>
        <Route path="/react-live-projects/AirbnbClone" element={<AirbnbClone/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
