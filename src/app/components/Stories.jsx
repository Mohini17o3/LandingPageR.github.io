import React from "react";

function Stories(props){
 return( 
  <>
    <div className="stories shadow-md p-4 rounded-lg bg-white mb-10">
      <img src={props.image} className="h-48 w-48" alt="Story" />
      <p>{props.description}</p>
    </div>
  </>
 );
}

export default Stories;