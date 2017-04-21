import React from 'react';

class Write extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  handleRemove(e){
    e.preventDefault();
    this.setState({
      data:''
    })
  }
  handlePost(){
    
  }
  render () {
    return(
      <div className='write'>
        <div className='write-btn'>
          <button className='write-remove' onRemove={this.handleRemove.bind(this)}>取消</button>
          <button className='write-post' onPost={this.handlePost.bind(this)}>发送</button>
        </div>
        <div>
          <textarea className='write-input'/>
        </div>

      </div>
    )
  }
}

export default Write;
