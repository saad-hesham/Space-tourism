import React, { useEffect } from "react";
import { Routes, Route  } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Home/Header"
import Destination from "./destination/Destination";
import Crew from "./crews/Crew"
import Technology from "./Technolgy/Technology"
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main>

<Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/Destination"  element={<Destination/>}/>
        <Route path="/Crew"  element={<Crew/>}/>
        <Route path="/Technology"  element={<Technology/>}/>
      </Routes>
    </main>
  );
}

export default App;
