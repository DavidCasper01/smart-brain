import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, faceboxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {faceboxes}
      </div>
    </div>
  );
}

export default FaceRecognition;