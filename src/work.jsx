import React from 'react';
import "./index.css"
import image from "./assets/uploading.png"
import image2 from "./assets/2.png"

import what from "./assets/images.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
const Work = () => {
  return (
    <>
    <div className="facebook-post">
  <div className="post-header">
    <div className="profile-picture">
      <img src={what} alt="Profile Picture" />
    </div>
    <div className="post-info">
      <span className="post-author">What is going on in Peshawar</span>
      <span className="post-time">14 hours ago</span>
    </div>
  </div>
  <div className="post-image">
    <img src={image} alt="Post Image" />
  </div>

  <div className="post-actions">
  <FontAwesomeIcon icon={faThumbsUp} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faShare} />
</div>
</div>




<div className="facebook-post">
  <div className="post-header">
    <div className="profile-picture">
      <img src={what} alt="Profile Picture" />
    </div>
    <div className="post-info">
      <span className="post-author">What is going on in Peshawar</span>
      <span className="post-time">1 day ago</span>
    </div>
  </div>
  <div className="post-image">
    <img src={image2} alt="Post Image" />
  </div>

  <div className="post-actions">
  <FontAwesomeIcon icon={faThumbsUp} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faShare} />
</div>
</div>

  </>
  )
}     
  

export default Work