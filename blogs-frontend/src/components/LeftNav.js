import React from 'react';
import {Link} from 'react-router';

class LeftNav extends React.Component {
  render () {
    return(
      <div className='leftnav'>
        <h1>我的博客</h1>
        <Link to='/' activeStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;首页</Link>
        <Link to='/Blog' activeStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;博客</Link>
        <Link to='/Search' activeStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}}><i className="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;搜索</Link>
        <Link to='/About' activeStyle={{backgroundColor: 'rgba(0,0,0,0.3)'}}><i className="fa fa-user-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;我的</Link>
      </div>
    )
  }
}

export default LeftNav;
