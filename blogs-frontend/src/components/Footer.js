import React from 'react';

import {Link} from 'react-router';

class Footer extends React.Component {
  render () {
    return(
      <footer>
      <Link to='/' activeStyle={{color:'brown'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br />首页</Link>
      <Link to='/Blog' activeStyle={{color:'brown'}}><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span><br />博客</Link>
      <Link to='/Search' activeStyle={{color:'brown'}}><span className="glyphicon glyphicon-search" aria-hidden="true"></span><br />搜索</Link>
      <Link to='/About' activeStyle={{color:'brown'}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span><br />我的</Link>
      </footer>
    )
  }
}

export default Footer;
