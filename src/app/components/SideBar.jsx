import React from 'react';

function SideBar() {
    
  return (
    <div className="bg-gray-800 h-full w-64 fixed left-0 top-0 z-10 ">
   
     <ul >
     <h2>Hello User</h2>
        <li>
            Discussion Forum
        </li>
        <li>
Market Sories        </li>
        <li>
            Sentiment
        </li>
        <li>
            Market
        </li>
        <li>
            Sector
        </li>
        <li>
            Watchlist   
        </li>
        <li>
            Events
        </li>
     </ul>
    </div>
  );
}

export default SideBar;
