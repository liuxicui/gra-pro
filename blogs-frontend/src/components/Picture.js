import React from 'react';

class Picture extends React.Component {
  render () {
    return(
      <div className='picture'>
        <div className='write'>
          <div className='write-btn'>
            <button className='write-remove'>取消</button>
            <button className='write-post'>发送</button>
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default Picture;
