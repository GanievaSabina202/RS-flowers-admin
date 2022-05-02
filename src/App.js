import {AppProvider} from "./app/AppProvider";
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';

function App() {
  return (
    <AppProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes >
    </AppProvider >
  );
}

export default App;
