import NavBar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Background from "./components/Background";
import React, { useState } from 'react'

const App = () => {

  const times = {
    daily: ['morning', 'noon', 'evening', 'night'],
    hourly: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
    weekly: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  }

  const [active, setActive] = useState('Daily')

  return (
    <>
      <NavBar setActive = {(val) => {setActive(val)}}/>
      <Background active = {active} data = {times}/>
    </>
  );
};
 
export default App;
