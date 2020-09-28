import React from 'react';

function Paybtn(prop) {
  return (
        <div className='col-6 btn-wrap'>
            <button className='pay-btn'>
                <h4>{prop.option}</h4>
            </button>
        </div>
  );
}

export default Paybtn;