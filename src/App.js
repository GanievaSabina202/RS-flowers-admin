import { AppProvider } from "./app/AppProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Auth0ProviderWithHistory from "./context/Auth0Provider";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppProvider>
    </Auth0ProviderWithHistory>
  );
}

export default App;
