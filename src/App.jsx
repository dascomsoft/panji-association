import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Actions from "./pages/Actions";
import Help from "./pages/Help";
import Beneficiary from "./pages/Beneficiary";
import Contact from "./pages/Contact";
import Navbar from "./components/Header";


const App = () => (
 
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Actions />} />
          <Route path="/aider" element={<Help />} />
          <Route path="/beneficiaire" element={<Beneficiary />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
 
);

export default App;
