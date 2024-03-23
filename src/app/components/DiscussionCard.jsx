import React from "react";

function DiscussionCard(props) {
  return (

    <div className="discussionCard shadow-md p-4 rounded-lg bg-white mb-10">
      <div className="flex items-center space-x-4">
      <img src={props.image} className="h-12 w-12" alt="Profile" />
      <h4 className="font-bold">{props.title}</h4>
      <span className="tag bg-blue-800 text-white px-2 py-1 rounded-full">
        {props.tag}
      </span>
      <p className="text-blue-500">{props.time}</p>
    </div>
      <p className="itemDescription col-span-2">{props.description}</p>
      <div className="imageGrid mt-2 flex items-center space-x-4">
        <div className="flex items-center">
          <img src="likes.svg" className="h-6 w-6 mr-1" alt="Likes" />
          <p>{props.likes}</p>
        </div>
        <div className="flex items-center">
          <img src="views.svg" className="h-6 w-6 mr-1" alt="Views" />
          <p>{props.views}</p>
        </div>
        <div className="flex items-center">
          <img src="comments.svg" className="h-6 w-6 mr-1" alt="Comments" />
          <p>{props.comments}</p>
        </div>
        <div className="flex items-center">
          <img src="share.svg" className="h-6 w-6 mr-1" alt="Share" />
          <p>Share</p>
        </div>
      </div>
    </div>
  
  );
}

export default DiscussionCard;
