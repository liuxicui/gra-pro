import React from 'react';

import {Link} from 'react-router';

class Blog extends React.Component {

  render () {
    return(
      <div className='blog'>
        <div className='blog-write'>
          <Link to='/Write'><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span><br />文字</Link>
        </div>
        <div className='blog-pic'>
          <Link to='/Picture'><span className="glyphicon glyphicon-picture" aria-hidden="true"></span><br />相片</Link>
        </div>
      </div>
    )
  }
}

export default Blog;
