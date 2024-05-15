import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/NavBar";
import Content from './Components/Content/Content';
import SideBar from './Components/SideBar/SideBar';

function App() {

  return (
    <>
      <Navbar />
      <div className="body">
        <SideBar />
        <Content />
      </div>
      
    </>
  )
}

export default App
