import NavBar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Background from "./components/Background";
import React, { useState } from 'react'

const App = () => {

  const times = ['morning', 'noon', 'evening', 'night']

  const [active, setActive] = useState('daily')

  return (
    <>
      <NavBar />
      <BottomNav />
      <Background active = {active} data = {times} />
    </>
  );
};
 
export default App;
