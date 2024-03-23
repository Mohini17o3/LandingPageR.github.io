'use client'
import React from 'react';
import DiscussionCard from "./DiscussionCard";
import Stories from "./Stories";
import dummyData from "../../../data/dummyData.json";
import Sidebar from './Sidebar';  

import { useState } from 'react';

function App() {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    console.log ("button clicked")
    setSidebarVisible(!sidebarVisible);
  };

  return (

    <div className="home relative">
  {sidebarVisible && (
    <div className="toggleButton absolute top-4 left-60 z-20">
      <button onClick={toggleSidebar}>
        <img src="button.svg" className="h-6 w-6 mr-1" alt="Toggle Sidebar" />
      </button>
    </div>
  )}
  <div className='toggleButton' >
    <div className="relative">
      <div className="toggleButton top-40 ">
        <button onClick={toggleSidebar}>
          <img src="button.svg" className="h-6 w-6 mr-1" alt="Toggle Sidebar" />
        </button>
      </div>
      {sidebarVisible && <Sidebar />}
    </div>
  

     </div>
      <div className='discussion'>
      <strong><h1>Discussion Forum</h1></strong> 
      {dummyData.map((data) => (
        <DiscussionCard
          key={data.id}
          image="/profile.webp"
          title={data.title}
          tag="Sector 2"
          time="2 min ago" 
          description={data.description} 
          likes="2k"
          views="2k"
          comments="2k comments"
        />
      ))}
      </div>
      
      <div className='story'>
      <strong><h1>Market Stories</h1></strong>
      {dummyData.map((data) => (
        <Stories
          key={data.id}  
          image="sunset.jpg"
          description={data.description}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

